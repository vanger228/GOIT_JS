'use strict';
// аотем рисіч
const weatherList = document.querySelector('weather-list');
function getWether(city, days) {
  const BASE_URL = 'http://api.weatherapi.com/v1/';
  const API_KEY = 'e0cd171b700f43b39c1134610241902';
  return fetch(
    `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=${days}`
  )
    .then(resp => {
      console.log(resp);
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }
      return resp.json();
    })
    .then(data => {
      console.log(data);
    });
}

getWether('Paris', 5);

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
