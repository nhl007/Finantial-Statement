//! add custom values with the + btn
//?both expense and liabilities
let ExpensesBoxCount = 0;

export function addNewExpenses() {
  const addNewExpense = document.querySelector('#add_new_expense');
  const customBox1 = document.querySelector('#custom_box_1');
  const customBox2 = document.querySelector('#custom_box_2');
  const customBox3 = document.querySelector('#custom_box_3');
  const customBox4 = document.querySelector('#custom_box_4');

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
}

let LiabilitiesBoxCount = 0;
export function addNewLiabilities() {
  const addNewLiability = document.querySelector('#add_new_liabilities');
  const customBox5 = document.querySelector('#custom_box_5');
  const customBox6 = document.querySelector('#custom_box_6');
  const customBox7 = document.querySelector('#custom_box_7');
  const customBox8 = document.querySelector('#custom_box_8');

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
    addNewLiability.classList.add('hidden');
    return;
  }
  return;
}
