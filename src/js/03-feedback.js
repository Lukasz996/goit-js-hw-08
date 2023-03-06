
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
    event.preventDefault();
    const user = {
        email: email.value,
        message: message.value,
      };
      console.log(user);
    event.currentTarget.reset(),
    localStorage.removeItem('feedback-form-state');
});

const savedState = localStorage.getItem('feedback-form-state');
    if (savedState) {
      const user = JSON.parse(savedState);
      email.value = user.email;
      message.value = user.message;
    };





// form.addEventListener('submit', event => {
//     event.preventDefault();
//     event.currentTarget.reset();
//     const savedState = localStorage.getItem('feedback-form-state');
//     if (savedState) {
//       const user = JSON.parse(savedState);
//       email.value = user.email;
//       message.value = user.message;
//     }
//     localStorage.removeItem('feedback-form-state');
//     console.log(user);
//   });




// const savedFormState = JSON.parse(localStorage.getItem('feedback-form-state'));
// emailInput.value = savedFormState?.email ?? '';
// messageInput.value = savedFormState?.message ?? '';