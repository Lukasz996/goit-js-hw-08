
import { throttle } from 'lodash';

const form = document.querySelector('form');
const email = document.querySelector('[name="email"]');
console.log(email);
const message = document.querySelector('[name="message"]');

form.addEventListener('input',throttle(() => {
    const user = {
      email: email.value,
      message: message.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(user));
  }, 500)
);

form.addEventListener('submit', event => {
    event.preventDefault(),
    event.currentTarget.reset(),
    localStorage.removeItem('feedback-form-state');
});



// const savedFormState = JSON.parse(localStorage.getItem('feedback-form-state'));
// emailInput.value = savedFormState?.email ?? '';
// messageInput.value = savedFormState?.message ?? '';