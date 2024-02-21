'use strict';
// аотем рисіч
// const weatherList = document.querySelector('weather-list');
// function getWether(city, days) {
//   const BASE_URL = 'http://api.weatherapi.com/v1/';
//   const API_KEY = 'e0cd171b700f43b39c1134610241902';
//   return fetch(
//     `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=${days}`
//   )
//     .then(resp => {
//       console.log(resp);
//       if (!resp.ok) {
//         throw new Error(resp.statusText);
//       }
//       return resp.json();
//     })
//     .then(data => {
//       console.log(data);
//     });
// }

// getWether('Paris', 5);

// макс
// https://jsonplaceholder.typicode.com/

// const list = document.querySelector('.todo-list');

// // const fetchTodos = () => {
// //   const promise = fetch('https://jsonplaceholder.typicode.com/todos');
// //   const response = promise.then(response => response.json()); //.json повертає також проміс, тому ще раз .then
// //   response.then(data => console.log(data));
// // };

// // fetchTodos();

// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//     // let html = '';
//     // for (let { title } of data) {
//     //   html += `<li>${title}</li>`;
//     // }
//     // // list.innerHTML = html;
//     // list.insertAdjacentHTML('beforeend', html);
//     //через map більш продуктивний варіант
//     list.innerHTML = data
//       .map(({ title }) => {
//         return `<li>${title}</li>`;
//       })
//       .join('');
//   })
//   .catch(err => {
//     alert('Incorrect request!');
//   });

const fetchUsersBtn = document.querySelector('.btn');
const userList = document.querySelector('.user-list');

// 2
fetchUsersBtn.addEventListener('click', () => {
  // console.log(fetchUsers());
  fetchUsers()
    .then(users => renderUsers(users))
    .catch(error => console.log('error'));
});

//1 порядок написання функцій по моїй логіці
function fetchUsers() {
  return fetch('https://jsonplaceholder.typicode.com/users').then(responce => {
    if (!responce.ok) {
      throw new Error(`Error:${responce.status}`);
    }
    return responce.json();
  });
}
// 3
function renderUsers(users) {
  console.log(users);
  const usersHTML = users
    .map(({ name, username, company: { bs, name: companyName } }) => {
      return `<li>name:${name} has username:${username}, bs:${bs}, company name: ${companyName}</li>`;
    })
    .join('');
  userList.insertAdjacentHTML('beforeend', usersHTML);
}
