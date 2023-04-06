import { handleUpdate } from './updateDomAndObject.js';
import { alertSetup } from './alerts.js';

export const saveData = async (values) => {
  //?api call to database

  //   fetch("/saveData", {
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

  //? update the existiing in local storage
  if (localStorage.getItem(values.name + values.date)) {
    localStorage.setItem(values.name + values.date, JSON.stringify(values));
    alertSetup(
      'safe',
      `${values.name} Successfully updated your data of ${values.date} !`
    );
  }

  //? save the data in local storage
  else {
    localStorage.setItem(values.name + values.date, JSON.stringify(values));
    alertSetup(
      'safe',
      `${values.name} Successfully saved your data of ${values.date} !`
    );
  }
};

//! function to fetch previous data with name and date [only if exists]
export const fetchPrevData = async (values) => {
  // console.log(values.name + values.date);
  const data = localStorage.getItem(values.name + values.date);

  if (data) {
    alertSetup('safe', `Successfully loaded data for ${values.date} !`);
    handleUpdate(JSON.parse(data), values);
  } else {
    alertSetup('danger', ` Didn't find any data !`);

    const cash_flow = document.querySelector('#cash_flow');
    const passive_income = document.querySelector('#passive_income');
    const debt_to_income = document.querySelector('#debt_to_income');

    cash_flow.textContent = 0;
    passive_income.textContent = 0;
    debt_to_income.textContent = 0;

    for (const [key, value] of Object.entries(values)) {
      // console.log(key.trim(), ':', value);
      // selectedElement.disabled = true
      if (key === 'name' || key === 'date' || key === 'currency') {
        continue;
      } else {
        values[key] = 0;
      }
    }

    const allElement = document.querySelectorAll('input');
    allElement.forEach((element) => {
      if (
        element.name === 'date' ||
        element.name === 'name' ||
        element.name === 'currency'
      ) {
      } else {
        element.value = '';
      }
    });

    //todo import this func
    // onChangeEffect('date');
  }
  // })
  // .catch((error) => {
  //   alertSetup('danger', error);
  // });
};
