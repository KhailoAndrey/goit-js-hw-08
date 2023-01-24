import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY_FORM = 'feedback-form-state';
const email = form.elements.email.value;
const message = form.elements.message.value;
const inputForm = {
  email: '',
  message: '',
};

if (localStorage.getItem(LOCALSTORAGE_KEY_FORM) !== null) {
  savedUserForm();
}

function savedUserForm() {
  const savedForm = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY_FORM));
  form.elements.email.value = savedForm.email;
  form.elements.message.value = savedForm.message;
  inputForm.email = savedForm.email;
  inputForm.message = savedForm.message;
}

form.addEventListener('input', throttle(saveStorageData, 500));

function saveStorageData(ev) {
  ev.preventDefault();
  inputForm[ev.target.name] = ev.target.value;
  // console.log(inputForm);
  localStorage.setItem(LOCALSTORAGE_KEY_FORM, JSON.stringify(inputForm));
}

form.addEventListener('submit', submitForm);

function submitForm(ev) {
  ev.preventDefault();
  console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY_FORM)));
  form.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY_FORM);
}
