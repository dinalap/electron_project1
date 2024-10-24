import users from './db.mjs';

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const name = formData.get('name');
  const lastname = formData.get('lastname');
  const age = formData.get('age');
  const user = { name, lastname, age };
  users.concat(user);
})