import users from './db.mjs';

const information = document.getElementById('info')
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`

const tbody = document.querySelector('tbody');
users.map((user) => {
  const tr = document.createElement('tr');
  Object.values(user).forEach((item) => {
    const td = document.createElement('td');
    td.textContent = item;
    tr.append(td);
  })
  tbody.append(tr);
});

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  const table = 'table';
  window.electronAPI.openNewTable();
})

