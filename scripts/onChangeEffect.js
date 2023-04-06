import { values } from './objectModel.js';

const setValues = (name, value) => {
  values[`${name}`] = value;
};

const onChangeFunc = (e) => {
  const total_income = document.querySelector('#total_income');
  const total_expenses = document.querySelector('#total_expenses');
  const total_liabilities = document.querySelector('#total_liabilities');

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

export const onChangeEffect = (idname) => {
  document.querySelector(`#${idname}`).onchange = (e) => {
    onChangeFunc(e);
  };
};
