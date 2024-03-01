import axios from 'axios';

axios({
  method: 'get',
  url: '<https://jsonplaceholder.typicode.com/users>',
})
  .then(response => console.log(response))
  .catch(error => console.log(error));

//   Метод axios.get(url[, config]) є спрощеним способом виконання GET-запиту.

// Квадратні дужки позначають необов'язковий аргумент у документації і не є частиною коду.

axios
  .get('<https://jsonplaceholder.typicode.com/users>')
  .then(response => console.log(response))
  .catch(error => console.log(error));

// Отже, метод axios.get потребує обов'язково лише адреси запиту, а метод GET автоматично підставляється сам. Крім того, Axios додає до запиту стандартні HTTP-заголовки, наприклад, Accept, у якому вказує application/json, оскільки найчастіше ми очікуємо саме JSON від сервера.

// Об'єкт відповіді на запит містить наступну інформацію.

// {
//   data: {},
//   status: 200,
//   statusText: 'OK',
//   headers: {},
//   config: {},
//   request: {}
// }

// axios.get('<https://jsonplaceholder.typicode.com/users>')
// 	.then(response => {
// 		console.log(response.data);
//     console.log(response.status);
//     console.log(response.statusText);
//     console.log(response.headers);
//     console.log(response.config);
// 	})
// 	.catch(error => {
// 		console.log(error);
// 	})

// Зверни увагу, на властивість data, у якій зберігаються дані відповіді.

// На відміну від fetch, нам не потрібно парсити дані відповіді методом response.json(). Це робиться автоматично і додається до властивості data. Крім того, не потрібно перевіряти статус відповіді у властивості response.ok. Бібліотека Axios робить це автоматично і відхиляє проміс з помилкою для будь-якого невдалого HTTP-коду відповіді, включаючи 404.

// Можна вказати стандартні налаштування конфігурації у властивості axios.defaults, які будуть застосовані до кожного запиту. Властивість axios.defaults.baseURL відповідає за збереження базової адреси для всіх HTTP-запитів.

// import axios from "axios";

// axios.defaults.baseURL = '<https://jsonplaceholder.typicode.com>';

// Тепер код запитів можна переписати так, як ти бачиш у прикладі нижче — вказавши лише частину адреси після базової. При виконанні запитів Axios автоматично додасть значення baseURL до кожного запиту.

// import axios from "axios";

// axios.defaults.baseURL = '<https://jsonplaceholder.typicode.com>';

// axios.get('/users')
// 	.then()
// 	.catch();

// axios.get('/posts')
// 	.then()
// 	.catch();

// axios.get('/images')
// 	.then()
// 	.catch();

// якщо у тебе є унікальний ключ API, який необхідно додавати до кожного запиту у вигляді HTTP-заголовка, ти можеш додати його до властивості axios.defaults.headers.common

// const myApiKey = 'secret-api-key-for-every-request';

// axios.defaults.headers.common['header-name'] = myApiKey;

// Замість рядка "header-name" вказуємо потрібну назву заголовка у вигляді рядка.

// Іншими словами, ми буквально додаємо нову властивість із ключем "header-name" до об'єкта axios.defaults.headers.common. Після цього Axios автоматично додасть цей заголовок із вказаним значенням до кожного запиту.

// ----Параметри рядка запиту
// old variant
// axios.get('<https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name>');

// Але Axios надає нам зручніший спосіб. В об'єкті конфігурації (параметр config) ти можеш вказати об'єкт параметрів у властивості params.

// axios.get("<https://jsonplaceholder.typicode.com/users>", {
// 	params: {
// 		_limit: 7,
// 		_sort: "name"
// 	}
// });

// Axios використовує цей об'єкт, щоб за допомогою URLSearchParams додати рядок запиту з параметрами до адреси.

// ----Синтаксис async/await

// Асинхронні функції

// Синтаксис async/await — це зручний спосіб написання асинхронного коду, який ззовні схожий на синхронний. Цей механізм був доданий до стандарту ECMAScript 2017 (ES8) і став дуже популярним серед розробників завдяки його зручності та зрозумілості. Будь-яка функція може бути асинхронною.

// Для оголошення асинхронної функції перед ключовим словом function додається async.

// async function fetchData() {
// 	// ...
// }

// У функціональному виразі також перед ключовим словом function додається async.

// const fetchData = async function() {
// 	// ...
// }

// Для оголошення асинхронної стрілкової функції перед списком параметрів додається ключове слово async.

// const fetchData = async () => {
// 	// ...
// }

// Для оголошення асинхронного методу об'єкта async додається перед іменем методу.

// const user = {
//   async getUsername() {
//     // ...
//   },
// };

// Для оголошення асинхронного методу класу також використовується async перед іменем методу.

// class User {
//   async getUsername() {
//     // ...
//   }
// }
