const currencyChange = document.querySelector('#currency');
const money_symbol = document.querySelectorAll('#money_symbol');
const submit_button = document.querySelector('#submit_button');
const cash_flow = document.querySelector('#cash_flow');
const passive_income = document.querySelector('#passive_income');
const debt_to_income = document.querySelector('#debt_to_income');

const dateInput = document.querySelector('input[type="month"]');

const newdate = new Date().toLocaleDateString().split('/');
// console.log(newdate[0].length);

let todayMonth = '';

if (newdate[0].length === 1) {
  todayMonth = '0' + newdate[0];
} else {
  todayMonth = newdate[0];
}

const today = `${newdate[2]}-${todayMonth}`;

dateInput.value = today;

//!IP Check
// function getIPFromAmazon() {
//   fetch('https://api.ipify.org/?format=json')
//     .then((response) => response.json())
//     .then((response) => console.log(response.ip));
// }

// getIPFromAmazon();

const values = {
  date: `${newdate[2]}-${todayMonth}`,
  name: '',
  currency: '$',
  salary: 0,
  interest: 0,
  rental_income: 0,
  business_income: 0,
  total_income: 0,

  health_insurance: 0,
  mortgage_rent: 0,
  student_loan: 0,
  car_loan: 0,
  car_insurance: 0,
  credit_card_pay: 0,
  phone_bill: 0,
  internet_pay: 0,
  grocery: 0,
  water_bill: 0,
  fast_food: 0,
  electric_bill: 0,
  charity: 0,
  retail_pay: 0,
  loan_pay: 0,
  child_support: 0,
  custom_expense_1: '',
  custom_expense1_value: 0,
  custom_expense_2: '',
  custom_expense2_value: 0,
  custom_expense_3: '',
  custom_expense3_value: 0,
  custom_expense_4: '',
  custom_expense4_value: 0,
  total_expenses: 0,

  savings: 0,
  custom_stock_name1: '',
  custom_stock_amount_1: 0,
  stocks1: 0,
  custom_stock_name2: '',
  custom_stock_amount_2: 0,
  stocks2: 0,
  custom_stock_name3: '',
  custom_stock_amount_3: 0,
  stocks3: 0,

  custom_business_name1: '',
  custom_business_downpay_1: 0,
  business1: 0,
  custom_business_name2: '',
  custom_business_downpay_2: 0,
  business2: 0,
  custom_business_name3: '',
  custom_business_downpay_3: 0,
  business3: 0,
  custom_business_name4: '',
  custom_business_downpay_4: 0,
  business4: 0,

  home_mortgage: 0,
  school_loans: 0,
  car_loans: 0,
  credit_card: 0,
  retail_debt: 0,

  custom_liabilities_1: '',
  custom_liabilities_1_value: 0,
  custom_liabilities_2: '',
  custom_liabilities_2_value: 0,
  custom_liabilities_3: '',
  custom_liabilities_3_value: 0,
  custom_liabilities_4: '',
  custom_liabilities_4_value: 0,

  liabilities_name_1: '',
  liabilities1: 0,
  liabilities_name_2: '',
  liabilities2: 0,
  liabilities_name_3: '',
  liabilities3: 0,
  liabilities_name_4: '',
  liabilities4: 0,

  total_liabilities: 0,
};

currencyChange.addEventListener('click', function (e) {
  e.preventDefault();
  values.currency = e.target.value;
  money_symbol[0].textContent = e.target.value;
  money_symbol[1].textContent = e.target.value;
});

const setValues = (name, value) => {
  values[`${name}`] = value;
};

const total_income = document.querySelector('#total_income');
const total_expenses = document.querySelector('#total_expenses');
const total_liabilities = document.querySelector('#total_liabilities');

const onChangeFunc = (e) => {
  setValues(e.target.name.trim(), e.target.value.trim());

  if (e.target.name === 'date') {
    return;
  }
  if (e.target.name === 'name') {
    return;
  }

  if (e.target.name === 'currency') {
    return;
  }

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

  let totalLiabilities =
    Number(values.school_loans) +
    Number(values.car_loans) +
    Number(values.home_mortgage) +
    Number(values.credit_card) +
    Number(values.retail_debt) +
    Number(values.liabilities1) +
    Number(values.liabilities2) +
    Number(values.liabilities3) +
    Number(values.liabilities4) +
    Number(values.custom_liabilities_1_value) +
    Number(values.custom_liabilities_2_value) +
    Number(values.custom_liabilities_3_value) +
    Number(values.custom_liabilities_4_value);

  total_income.value = totalIncome.toFixed(2);
  total_expenses.value = totalExpenses.toFixed(2);
  total_liabilities.value = totalLiabilities.toFixed(2);

  values.total_income = totalIncome;
  values.total_expenses = totalExpenses;
  values.total_liabilities = totalLiabilities;

  cash_flow.textContent = totalIncome.toFixed(2) - totalExpenses.toFixed(2);

  let passiveIncome =
    Number(values.interest) +
    Number(values.business_income) +
    Number(values.rental_income);
  passive_income.textContent = passiveIncome;

  let debt__to__income = ((totalExpenses / totalIncome) * 100).toFixed(2);
  debt_to_income.textContent = debt__to__income;
};

const onChangeEffect = (idname) => {
  document.querySelector(`#${idname}`).onchange = (e) => {
    onChangeFunc(e);
  };
};

onChangeEffect('name');
onChangeEffect('date');
onChangeEffect('salary');
onChangeEffect('interest');
onChangeEffect('business_income');

//!income total
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

//! add custom values with the + btn
//??both expense and liabilities}

const addNewExpense = document.querySelector('#add_new_expense');
const customBox1 = document.querySelector('#custom_box_1');
const customBox2 = document.querySelector('#custom_box_2');
const customBox3 = document.querySelector('#custom_box_3');
const customBox4 = document.querySelector('#custom_box_4');

const addNewLiabilities = document.querySelector('#add_new_liabilities');
const customBox5 = document.querySelector('#custom_box_5');
const customBox6 = document.querySelector('#custom_box_6');
const customBox7 = document.querySelector('#custom_box_7');
const customBox8 = document.querySelector('#custom_box_8');

let ExpensesBoxCount = 0;
addNewExpense.addEventListener('click', function () {
  if (ExpensesBoxCount === 0) {
    customBox1.classList.remove('hidden');
    ExpensesBoxCount++;
    return;
  }
  if (ExpensesBoxCount === 1) {
    customBox2.classList.remove('hidden');
    ExpensesBoxCount++;
    return;
  }
  if (ExpensesBoxCount === 2) {
    customBox3.classList.remove('hidden');
    ExpensesBoxCount++;
    return;
  }
  if (ExpensesBoxCount === 3) {
    addNewExpense.classList.add('hidden');
    customBox4.classList.remove('hidden');
    ExpensesBoxCount++;
    return;
  }
  return;
});

let LiabilitiesBoxCount = 0;
addNewLiabilities.addEventListener('click', function () {
  if (LiabilitiesBoxCount === 0) {
    customBox5.classList.remove('hidden');
    LiabilitiesBoxCount++;
    return;
  }
  if (LiabilitiesBoxCount === 1) {
    customBox6.classList.remove('hidden');
    LiabilitiesBoxCount++;
    return;
  }
  if (LiabilitiesBoxCount === 2) {
    customBox7.classList.remove('hidden');
    LiabilitiesBoxCount++;
    return;
  }
  if (LiabilitiesBoxCount === 3) {
    customBox8.classList.remove('hidden');
    LiabilitiesBoxCount++;
    addNewLiabilities.classList.add('hidden');
    return;
  }
  return;
});

//! add custom values with the + btn ends here

//! alert and loading indicators
const loading_div = document.querySelector('#loading_div');
const alert_div = document.querySelector('#alert_div');
const alert_type = document.querySelector('#alert_type');
const alert_message = document.querySelector('#alert_message');

const alertSetup = (type = 'danger', message) => {
  if (type === 'danger') {
    alert_div.classList.remove('hidden');
    alert_type.classList.remove('__safe__');
    alert_type.classList.add('__danger__');
    alert_message.textContent = message;
  } else {
    alert_div.classList.remove('hidden');
    alert_type.classList.remove('__danger__');
    alert_type.classList.add('__safe__');
    alert_message.textContent = message;
  }
  setTimeout(() => alert_div.classList.add('hidden'), 3000);
};

//! alert indicators function ends

const apiCall = async () => {
  //   fetch("<?php echo get_rest_url(null, 'v1/finance-form/submit'); ?>", {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(values),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       alertSetup('safe', data);
  //     })
  //     .catch((error) => {
  //       alertSetup('danger', error);
  //     });
  if (localStorage.getItem(values.name + values.date)) {
    localStorage.setItem(values.name + values.date, JSON.stringify(values));
    alertSetup(
      'safe',
      `${values.name} Successfully updated your data of ${values.date} !`
    );
  } else {
    localStorage.setItem(values.name + values.date, JSON.stringify(values));
    alertSetup(
      'safe',
      `${values.name} Successfully saved your data of ${values.date} !`
    );
  }
};

//! submit data to api { also updates data}
submit_button.addEventListener('click', async function (event) {
  event.preventDefault();

  // console.log(values);

  if (values.name === '' || !values.date) {
    alertSetup('danger', 'Please provide your full name !');
  } else {
    loading_div.classList.remove('hidden');
    await apiCall();
    loading_div.classList.add('hidden');
  }
});

//! handle data update of inputs

const handleUpdate = (data) => {
  currencyChange.value = data.currency;
  money_symbol[0].textContent = data.currency;
  money_symbol[1].textContent = data.currency;

  let totalIncome =
    Number(data.salary) +
    Number(data.interest) +
    Number(data.business_income) +
    Number(data.rental_income);

  let totalExpenses =
    Number(data.health_insurance) +
    Number(data.mortgage_rent) +
    Number(data.student_loan) +
    Number(data.car_insurance) +
    Number(data.car_loan) +
    Number(data.credit_card_pay) +
    Number(data.phone_bill) +
    Number(data.internet_pay) +
    Number(data.grocery) +
    Number(data.water_bill) +
    Number(data.fast_food) +
    Number(data.electric_bill) +
    Number(data.charity) +
    Number(data.retail_pay) +
    Number(data.loan_pay) +
    Number(data.child_support) +
    Number(data.custom_expense1_value) +
    Number(data.custom_expense2_value) +
    Number(data.custom_expense3_value) +
    Number(data.custom_expense4_value);

  cash_flow.textContent = totalIncome.toFixed(2) - totalExpenses.toFixed(2);
  let passiveIncome =
    Number(data.interest) +
    Number(data.business_income) +
    Number(data.rental_income);

  passive_income.textContent = passiveIncome.toFixed(2);

  let debt__to__income =
    (totalExpenses.toFixed(2) / totalIncome.toFixed(2)) * 100;
  debt_to_income.textContent = debt__to__income.toFixed(2);

  for (const [key, value] of Object.entries(data)) {
    if (key === 'name' || key === 'date') {
    } else {
      //? sets the previous value to the dom
      const selectedElement = document.querySelector(`#${key.trim()}`);
      selectedElement.value = value;

      // selectedElement.disabled = true

      //? sets the previous value to the object

      let searchKey = key.trim();
      values[searchKey] = value;
    }
  }
};

//! function to fetch previous data with name and date [only if exists]
const fetchPrevData = async (thisMonth) => {
  submit_button.classList.remove('hidden');
  //   fetch("<?php echo get_rest_url(null, 'v1/finance-form/getdata'); ?>", {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       name: values.name,
  //       date: values.date,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {

  // console.log(values.name + values.date);
  const data = localStorage.getItem(values.name + values.date);

  if (data) {
    alertSetup('safe', `Successfully loaded data for ${values.date} !`);
    handleUpdate(JSON.parse(data));
  }

  // else if ((data !== "Please Provide the Correct Information !") && (thisMonth === true)) {

  //     handleUpdate(data)

  //     alertSetup('safe', `Successfully loaded data of the current month!`)

  // }
  else {
    const allElement = document.querySelectorAll('input');
    cash_flow.textContent = 0;
    passive_income.textContent = 0;
    debt_to_income.textContent = 0;

    // Object.keys(values).forEach(function(index) {
    //     values[index] = null
    // });
    for (const [key, value] of Object.entries(values)) {
      console.log(key.trim(), ':', value);
      // selectedElement.disabled = true
      if (key === 'name' || key === 'date' || key === 'currency') {
        continue;
      } else {
        values[key] = 0;
      }
    }

    allElement.forEach((element) => {
      if (
        element.name === 'date' ||
        element.name === 'name' ||
        element.name === 'currency'
      ) {
      } else {
        element.value = 0;
      }
    });

    alertSetup('danger', ` Didn't find any data !`);

    onChangeEffect('date');
  }
  // })
  // .catch((error) => {
  //   alertSetup('danger', error);
  // });
};

const nameInput = document.querySelector('#name');

//!name change event listener
nameInput.addEventListener('change', async function () {
  loading_div.classList.remove('hidden');
  if (values.date) {
    loading_div.classList.remove('hidden');
    // if (values.date !== today) {
    // await fetchPrevData(false)
    await fetchPrevData(false);
    loading_div.classList.add('hidden');
    // } else {
    //     await fetchPrevData(true)
    //     loading_div.classList.add('hidden')
    // }
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
  const Herotext = document.querySelector('#annual_hero_text');
  const Herotext1 = document.querySelector('#annual_hero_text1');
  const Herotext2 = document.querySelector('#annual_hero_text2');
  Herotext.textContent = 'Monthly';
  Herotext1.textContent = 'Monthly';
  Herotext2.textContent = 'Monthly';

  if (values.name) {
    loading_div.classList.remove('hidden');
    // if (values.date !== today) {
    // await fetchPrevData(false)
    await fetchPrevData(false);
    loading_div.classList.add('hidden');
    // } else {
    //     await fetchPrevData(true)
    //     loading_div.classList.add('hidden')
    // }
  } else {
    alert_div.classList.remove('hidden');
    alert_message.textContent = 'Please Input Your Name First';
    setTimeout(() => {
      alert_div.classList.add('hidden');
    }, 4000);
  }
  loading_div.classList.add('hidden');
});

const AnnualSum = document.querySelector('#annual_summary');

const fetchAnnualData = async () => {
  //   await fetch(
  //     "<?php echo get_rest_url(null, 'v1/finance-form/getannualdata'); ?>",
  //     {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         name: values.name,
  //         date: values.date,
  //       }),
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
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

// !Annual Summary Button
AnnualSum.addEventListener('click', async function () {
  loading_div.classList.remove('hidden');

  if (values.name) {
    dropdownContainer.classList.add('hidden');
    annualHiddenCon.classList.remove('hidden');
    nameHiddenSpan.textContent = values.name + ' ' + newdate[2];
    for (const [key, value] of Object.entries(values)) {
      // console.log(key.trim(), ':', value);
      // selectedElement.disabled = true
      if (key === 'name' || key === 'date' || key === 'currency') {
        continue;
      } else {
        values[key] = 0;
      }
    }

    const Herotext = document.querySelector('#annual_hero_text');
    const Herotext1 = document.querySelector('#annual_hero_text1');
    const Herotext2 = document.querySelector('#annual_hero_text2');
    Herotext.textContent = 'Annual';
    Herotext1.textContent = 'Annual';
    Herotext2.textContent = 'Annual';

    await fetchAnnualData();
  } else {
    alertSetup('danger', 'Please Provide Your Name !');
  }
  loading_div.classList.add('hidden');
});

const dropdownContainer = document.querySelector('#dropdown__container');
const annualHiddenCon = document.querySelector('#annual__hidden__con');
const nameHiddenSpan = document.querySelector('#name__hidden__span');

//! go back button
annualHiddenCon.addEventListener('click', async function () {
  loading_div.classList.remove('hidden');
  annualHiddenCon.classList.add('hidden');
  dropdownContainer.classList.remove('hidden');

  const Herotext = document.querySelector('#annual_hero_text');
  const Herotext1 = document.querySelector('#annual_hero_text1');
  const Herotext2 = document.querySelector('#annual_hero_text2');
  Herotext.textContent = 'Monthly';
  Herotext1.textContent = 'Monthly';
  Herotext2.textContent = 'Monthly';

  if (values.name) {
    loading_div.classList.remove('hidden');
    // if (values.date !== today) {
    // await fetchPrevData(false)
    await fetchPrevData(false);
    loading_div.classList.add('hidden');
    // } else {
    //     await fetchPrevData(true)
    //     loading_div.classList.add('hidden')
    // }
  } else {
    alert_div.classList.remove('hidden');
    alert_message.textContent = 'Please Input Your Name First';
    setTimeout(() => {
      alert_div.classList.add('hidden');
    }, 4000);
  }
  loading_div.classList.add('hidden');
  document.getElementById('name').disabled = false;
});
