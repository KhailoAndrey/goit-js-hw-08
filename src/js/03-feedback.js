import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY_FORM = 'feedback-form-state';
const email = form.elements.email.value;
const message = form.elements.message.value;
const inputForm = {
  email: email,
  message: message,
};

form.addEventListener('input', saveStorageData);

function saveStorageData(ev) {
  ev.preventDefault();
  const targetName = ev.target.name;
  // if (targetName === "email") {
  //     inputForm.email = ev.target.value;
  // } else if (targetName === "message") {
  //     inputForm.message = ev.target.value;
  // }
  inputForm[targetName] = ev.target.value;
  // console.log(inputForm);
  localStorage.setItem(LOCALSTORAGE_KEY_FORM, JSON.stringify(inputForm));
}
throttle(saveStorageData, 1500);

form.addEventListener('submit', () => {
  console.log(localStorage.getItem(LOCALSTORAGE_KEY_FORM));
  // console.log(
  //     JSON.parse(
  //         localStorage.getItem(LOCALSTORAGE_KEY_FORM)
  //     )
  // );
  form.reset();
});
// const throttled = throttle(saveStorageData, 500);
