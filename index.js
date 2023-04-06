//! imports
import { values } from './scripts/objectModel.js';
import { onChangeEffect } from './scripts/onChangeEffect.js';
import { alertSetup } from './scripts/alerts.js';
import { saveData, fetchPrevData } from './scripts/fetchAndSetData.js';
import {
  addNewExpenses,
  addNewLiabilities,
} from './scripts/addNewLiabilitiesAndExpenses.js';
import { annualSummary, goBack } from './scripts/annualSummary.js';

//!alerts dom elements
const alert_div = document.querySelector('#alert_div');
const alert_message = document.querySelector('#alert_message');
const loading_div = document.querySelector('#loading_div');

//? setting the default date according to current date
const dateInput = document.querySelector('input[type="month"]');
const newDate = new Date().toLocaleDateString().split('/');

let todayMonth = '';
if (newDate[0].length === 1) {
  todayMonth = '0' + newDate[0];
} else {
  todayMonth = newDate[0];
}

const today = `${newDate[2]}-${todayMonth}`;
dateInput.value = today;

values.date = `${newDate[2]}-${todayMonth}`;

//!IP Check
// function getIPFromAmazon() {
//   fetch('https://api.ipify.org/?format=json')
//     .then((response) => response.json())
//     .then((response) => console.log(response.ip));
// }

// getIPFromAmazon();

const currencyChange = document.querySelector('#currency');
const money_symbol = document.querySelectorAll('#money_symbol');

currencyChange.addEventListener('click', function (e) {
  e.preventDefault();
  values.currency = e.target.value;
  money_symbol[0].textContent = e.target.value;
  money_symbol[1].textContent = e.target.value;
});

//? saving the data to the object
onChangeEffect('name');
onChangeEffect('date');
onChangeEffect('salary');
onChangeEffect('interest');
onChangeEffect('business_income');
onChangeEffect('rental_income');

//!expenses
onChangeEffect('health_insurance');
onChangeEffect('mortgage_rent');
onChangeEffect('student_loan');
onChangeEffect('car_loan');
onChangeEffect('car_insurance');
onChangeEffect('credit_card_pay');
onChangeEffect('phone_bill');
onChangeEffect('internet_pay');
onChangeEffect('grocery');
onChangeEffect('water_bill');
onChangeEffect('fast_food');
onChangeEffect('electric_bill');
onChangeEffect('charity');
onChangeEffect('retail_pay');
onChangeEffect('loan_pay');
onChangeEffect('child_support');
onChangeEffect('custom_expense_1');
onChangeEffect('custom_expense_2');
onChangeEffect('custom_expense_3');
onChangeEffect('custom_expense_4');
onChangeEffect('custom_expense1_value');
onChangeEffect('custom_expense2_value');
onChangeEffect('custom_expense3_value');
onChangeEffect('custom_expense4_value');

//!Assets
onChangeEffect('savings');
onChangeEffect('custom_stock_name1');
onChangeEffect('custom_stock_amount_1');
onChangeEffect('stocks1');
onChangeEffect('custom_stock_name2');
onChangeEffect('custom_stock_amount_2');
onChangeEffect('stocks2');
onChangeEffect('custom_stock_name3');
onChangeEffect('custom_stock_amount_3');
onChangeEffect('stocks3');

onChangeEffect('custom_business_name1');
onChangeEffect('custom_business_downpay_1');
onChangeEffect('business1');
onChangeEffect('custom_business_name2');
onChangeEffect('custom_business_downpay_2');
onChangeEffect('business2');
onChangeEffect('custom_business_name3');
onChangeEffect('custom_business_downpay_3');
onChangeEffect('business3');
onChangeEffect('custom_business_name4');
onChangeEffect('custom_business_downpay_4');
onChangeEffect('business4');

//!Liabilities
onChangeEffect('home_mortgage');
onChangeEffect('school_loans');
onChangeEffect('car_loans');
onChangeEffect('credit_card');
onChangeEffect('retail_debt');

onChangeEffect('liabilities_name_1');
onChangeEffect('liabilities1');
onChangeEffect('liabilities_name_2');
onChangeEffect('liabilities2');
onChangeEffect('liabilities_name_3');
onChangeEffect('liabilities3');
onChangeEffect('liabilities_name_4');
onChangeEffect('liabilities4');

onChangeEffect('custom_liabilities_1');
onChangeEffect('custom_liabilities_2');
onChangeEffect('custom_liabilities_3');
onChangeEffect('custom_liabilities_4');
onChangeEffect('custom_liabilities_1_value');
onChangeEffect('custom_liabilities_2_value');
onChangeEffect('custom_liabilities_3_value');
onChangeEffect('custom_liabilities_4_value');

//? add custom values with the + btn
//!both expense and liabilities
const addNewExpense = document.querySelector('#add_new_expense');
const addNewLiability = document.querySelector('#add_new_liabilities');
addNewExpense.addEventListener('click', () => addNewExpenses());
addNewLiability.addEventListener('click', () => addNewLiabilities());

//! submit data to [localStorage] api { also updates data}
const submit_button = document.querySelector('#submit_button');
submit_button.addEventListener('click', async function (event) {
  event.preventDefault();

  // console.log(values);

  if (values.name === '' || !values.date) {
    alertSetup('danger', 'Please provide your full name !');
  } else {
    loading_div.classList.remove('hidden');
    await saveData(values);
    loading_div.classList.add('hidden');
  }
});

//!name change event listener
const nameInput = document.querySelector('#name');
nameInput.addEventListener('change', async function () {
  loading_div.classList.remove('hidden');

  if (values.date) {
    loading_div.classList.remove('hidden');
    await fetchPrevData(values);
    loading_div.classList.add('hidden');
  } else {
    alert_div.classList.remove('hidden');
    alert_message.textContent = 'Please Input The Date First ';
    setTimeout(() => {
      alert_div.classList.add('hidden');
    }, 4000);
  }
  loading_div.classList.add('hidden');
});

//!date change event listener
dateInput.addEventListener('change', async function () {
  loading_div.classList.remove('hidden');
  const HeroText = document.querySelector('#annual_hero_text');
  const HeroText1 = document.querySelector('#annual_hero_text1');
  const HeroText2 = document.querySelector('#annual_hero_text2');

  HeroText.textContent = 'Monthly';
  HeroText1.textContent = 'Monthly';
  HeroText2.textContent = 'Monthly';

  if (values.name) {
    loading_div.classList.remove('hidden');
    await fetchPrevData(values);
    loading_div.classList.add('hidden');
  } else {
    alert_div.classList.remove('hidden');
    alert_message.textContent = 'Please Input Your Name First';
    setTimeout(() => {
      alert_div.classList.add('hidden');
    }, 4000);
  }
  loading_div.classList.add('hidden');
});

// !Annual Summary
const AnnualSum = document.querySelector('#annual_summary');
AnnualSum.addEventListener('click', () => annualSummary());

//! go back button
const annualHiddenCon = document.querySelector('#annual__hidden__con');
annualHiddenCon.addEventListener('click', () => goBack());
