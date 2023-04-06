export const handleUpdate = (data, values) => {
  const currencyChange = document.querySelector('#currency');
  const money_symbol = document.querySelectorAll('#money_symbol');
  const cash_flow = document.querySelector('#cash_flow');
  const passive_income = document.querySelector('#passive_income');
  const debt_to_income = document.querySelector('#debt_to_income');

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
      continue;
    } else {
      //? sets the previous value to the dom
      const selectedElement = document.querySelector(`#${key.trim()}`);
      selectedElement.value = value;

      //? sets the previous value to the object

      let searchKey = key.trim();
      values[searchKey] = value;
    }
  }
};
