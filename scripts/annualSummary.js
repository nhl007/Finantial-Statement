import { values } from './objectModel.js';
import { alertSetup } from './alerts.js';
import { fetchPrevData } from './fetchAndSetData.js';

//!alerts
const alert_div = document.querySelector('#alert_div');
const alert_message = document.querySelector('#alert_message');
const loading_div = document.querySelector('#loading_div');

const cash_flow = document.querySelector('#cash_flow');
const passive_income = document.querySelector('#passive_income');
const debt_to_income = document.querySelector('#debt_to_income');
const dropdownContainer = document.querySelector('#dropdown__container');
const nameHiddenSpan = document.querySelector('#name__hidden__span');
const annualHiddenCon = document.querySelector('#annual__hidden__con');

export const fetchAnnualData = async () => {
  const data = [];

  for (let key in localStorage) {
    // Check if the key contains "2023"
    if (key.includes('2023') && key.includes(`${values.name}`)) {
      // Get the value for the key and do something with it
      const value = localStorage.getItem(key);
      data.push(JSON.parse(value));
    }
  }

  if (data.length !== 0 && typeof data === 'object') {
    alertSetup('safe', ' Loaded Annual Summary !');
    data.forEach((dataset) => {
      for (const [key, value] of Object.entries(dataset)) {
        // console.log(key.trim(), ':', value);
        // selectedElement.disabled = true
        if (key === 'name' || key === 'date' || key === 'currency') {
          continue;
        } else {
          let searchkey = key.trim();
          values[searchkey] = Number(values[searchkey]) + Number(value);
          // console.log(key.trim(), ':', value);
          const selectedElement = document.querySelector(`#${key.trim()}`);
          // selectedElement.disabled = true
          selectedElement.value = values[searchkey];
        }
      }
    });

    //!annual hero calc

    let totalIncome =
      Number(values.salary) +
      Number(values.interest) +
      Number(values.business_income) +
      Number(values.rental_income);

    let totalExpenses =
      Number(values.health_insurance) +
      Number(values.mortgage_rent) +
      Number(values.student_loan) +
      Number(values.car_insurance) +
      Number(values.car_loan) +
      Number(values.credit_card_pay) +
      Number(values.phone_bill) +
      Number(values.internet_pay) +
      Number(values.grocery) +
      Number(values.water_bill) +
      Number(values.fast_food) +
      Number(values.electric_bill) +
      Number(values.charity) +
      Number(values.retail_pay) +
      Number(values.loan_pay) +
      Number(values.child_support) +
      Number(values.custom_expense1_value) +
      Number(values.custom_expense2_value) +
      Number(values.custom_expense3_value) +
      Number(values.custom_expense4_value);

    cash_flow.textContent = totalIncome.toFixed(2) - totalExpenses.toFixed(2);

    let passiveIncome =
      Number(values.interest) +
      Number(values.business_income) +
      Number(values.rental_income);

    passive_income.textContent = passiveIncome.toFixed(2);

    let debt__to__income = ((totalExpenses / totalIncome) * 100).toFixed(2);
    debt_to_income.textContent = debt__to__income;

    //!set values object to null

    for (const [key, value] of Object.entries(values)) {
      // console.log(key.trim(), ':', value);
      // selectedElement.disabled = true
      if (key === 'name' || key === 'date' || key === 'currency') {
        continue;
      } else {
        values[key] = 0;
      }
    }
  } else if (data.length === 0) {
    alertSetup('danger', 'No data found !');
  } else {
    alertSetup('danger', data);
  }
  submit_button.classList.add('hidden');
  document.getElementById('name').disabled = true;
  // })
  // .catch((error) => {
  //   alertSetup('danger', error);
  // });
};

export function annualSummary() {
  loading_div.classList.remove('hidden');

  if (values.name) {
    dropdownContainer.classList.add('hidden');
    annualHiddenCon.classList.remove('hidden');
    nameHiddenSpan.textContent = values.name + ' ' + values.date.split('-')[0];
    for (const [key, value] of Object.entries(values)) {
      // console.log(key.trim(), ':', value);
      // selectedElement.disabled = true
      if (key === 'name' || key === 'date' || key === 'currency') {
        continue;
      } else {
        values[key] = 0;
      }
    }

    const HeroText = document.querySelector('#annual_hero_text');
    const HeroText1 = document.querySelector('#annual_hero_text1');
    const HeroText2 = document.querySelector('#annual_hero_text2');
    HeroText.textContent = 'Annual';
    HeroText1.textContent = 'Annual';
    HeroText2.textContent = 'Annual';

    fetchAnnualData();
  } else {
    alertSetup('danger', 'Please Provide Your Name !');
  }
  loading_div.classList.add('hidden');
}

//! goBack button

export function goBack() {
  loading_div.classList.remove('hidden');
  annualHiddenCon.classList.add('hidden');
  dropdownContainer.classList.remove('hidden');

  const HeroText = document.querySelector('#annual_hero_text');
  const HeroText1 = document.querySelector('#annual_hero_text1');
  const HeroText2 = document.querySelector('#annual_hero_text2');
  HeroText.textContent = 'Monthly';
  HeroText1.textContent = 'Monthly';
  HeroText2.textContent = 'Monthly';

  if (values.name) {
    loading_div.classList.remove('hidden');
    fetchPrevData(values);
    loading_div.classList.add('hidden');
  } else {
    alert_div.classList.remove('hidden');
    alert_message.textContent = 'Please Input Your Name First';
    setTimeout(() => {
      alert_div.classList.add('hidden');
    }, 4000);
  }
  loading_div.classList.add('hidden');
  document.getElementById('name').disabled = false;
}
