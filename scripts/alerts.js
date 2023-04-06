//! alert and loading indicators
const alert_div = document.querySelector('#alert_div');
const alert_type = document.querySelector('#alert_type');
const alert_message = document.querySelector('#alert_message');

export const alertSetup = (type = 'danger', message) => {
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
