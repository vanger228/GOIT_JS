'use strict';
// // артем рисіч

// ----
// fetchUsers

// const fetchUsersBtn = document.querySelector('.btn');
// const userList = document.querySelector('.user-list');

// // 2
// fetchUsersBtn.addEventListener('click', () => {
//   // console.log(fetchUsers());
//   fetchUsers()
//     .then(users => renderUsers(users))
//     .catch(error => console.log('error'));
// });

// //1 порядок написання функцій по моїй логіці
// function fetchUsers() {
//   return fetch('https://jsonplaceholder.typicode.com/users').then(responce => {
//     if (!responce.ok) {
//       throw new Error(`Error:${responce.status}`);
//     }
//     return responce.json();
//   });
// }
// // 3
// function renderUsers(users) {
//   console.log(users);
//   const usersHTML = users
//     .map(
//       ({
//         name,
//         username,
//         company: { bs, name: companyName },
//         address: {
//           geo: { lat },
//         },
//       }) => {
//         return `<li>name:${name} has username:${username}, bs:${bs}, company name: ${companyName}, lat:${lat}</li>`;
//       }
//     )
//     .join('');
//   userList.insertAdjacentHTML('beforeend', usersHTML);
// }

// ----

// weather

// const search = document.querySelector('.js-search');
// const list = document.querySelector('.js-list');
// search.addEventListener('submit', onSearch);

// function onSearch(evt) {
//   evt.preventDefault();
//   const { query, days } = evt.currentTarget.elements; // деструктуризуємо елементи форми
//   getWether(query.value, days.value) // передаємо значення в fetch
//     .then(data =>
//       list.insertAdjacentHTML(
//         'beforeend',
//         createMarkup(data.forecast.forecastday)
//       )
//     )
//     .catch(err => console.log(err));
// }

// function getWether(city, days) {
//   const BASE_URL = 'http://api.weatherapi.com/v1';
//   const API_KEY = 'e0cd171b700f43b39c1134610241902';
//   return fetch(
//     `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=${days}&lang=uk`
//   ) //цей return роверне нам обєкт браузерного api, Response. і ми одразу перевіримо щоб ok:true?newError.Далі ми цей Resp парсимо  в json і передаємо далі,
//     .then(resp => {
//       // console.log(resp); //Obj: Response містить данні про запит, (.ok, status, statusText будуть нам корисні)
//       if (!resp.ok) {
//         throw new Error(resp.statusText); //throw примусово кидає нас в блок .catch
//       }
//       return resp.json(); //повертає проміс, потрібен наступний ланцюжок .then
//     });
// }

// function createMarkup(arr) {
//   console.log(arr);
//   return arr
//     .map(
//       ({
//         date,
//         day: {
//           avgtemp_c,
//           condition: { text, icon },
//         },
//       }) =>
//         `<li>
//         <img src="${icon}" alt="${text}" />
//         <p>${text}</p>
//         <h2>${date}</h2>
//         <h3>${avgtemp_c}</h3>
//       </li>`
//     )
//     .join('');
// }

// // -----

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
//     console.log(response);
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
//     alert('Incorrect request, fuck!');
//   });

//-----max pixabay

// const list = document.querySelector('.user-list2');

// const KEY = '42512017-1bddfdd3afd2851258a10c68c';
// const BASE_URL = 'https://pixabay.com/api/';
// // https://pixabay.com/api/?key=42512017-1bddfdd3afd2851258a10c68c&q=old+cars
// const QUERY = 'old+cars';

// const LINK = `${BASE_URL}?key=${KEY}&q=${QUERY}`;
// console.log(LINK);

// // 2
// function getImages() {
//   return fetch(LINK)
//     .then(resp => {
//       if (!resp.ok) {
//         throw new Error('Image error!');
//       }
//       return resp.json();
//     })
//     .catch(err => {
//       alert('Err fethingimg pixabay!');
//     });
// }

// // 1
// function sliceCatchImages() {
//   getImages()
//     .then(data => {
//       const images = data.hits.slice(0, 4);
//       renderImg(images);
//     })
//     .catch(err => {
//       console.error(err);
//     });
// }

// sliceCatchImages();
// // 3
// function renderImg(images) {
//   console.log(images);

//   const htmlImg = images
//     .map(({ webformatURL }) => {
//       return `<img src="${webformatURL}"> </img>`;
//     })
//     .join('');
//   list.insertAdjacentHTML('beforeend', htmlImg);
// }

// -------CRUD
// тут буде конспект, бля буду
// ------

// -----Макс 2 лекція

const apiUrl = 'https://65d889dac96fbb24c1bbbc49.mockapi.io/api/v1/';
// приклад обєкта на бекенді
// {
//   "title": "title 1",
//   "author": "author 1",
//   "genres": [],
//   "rating": 79,
//   "id": "1"
// }

// function fetchBooks() {
//   return fetch(apiUrl + `books`)
//     .then(res => res.json())
//     .then(res => console.log(res));
// }
// fetchBooks();

// function fetchBooksById(bookId) {
//   return fetch(`${apiUrl}books/${bookId}`).then(res =>
//     res.json().then(data => console.log(data))
//   );
// }
// fetchBooksById(2);

// ----

// function addBook(book) {
//   const options = {
//     method: 'POST',
//     headers: {
//       //вказуємо який тип данних заливаємо на сервер
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(book),
//   };
//   return fetch(apiUrl + 'books', options).then(res => res.json());
// }

// addBook({
//   title: 'Tectoea KHnra 3 CSS',
//   author: 'I',
//   genres: ['CSS'],
//   rating: 9,
// })
//   .then(book => {
//     console.log('add book');
//     console.log(book);
//   })
//   .catch(err => console.log('error'));

// ----

// function updateBookById(update, bookId) {
//   const options = {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(update),
//   };
//   return fetch(`${apiUrl}books/${bookId}`, options).then(res => res.json());
// }

// updateBookById({ title: 'Bens«a Hoea KHHra no PODEJS' }, 19);
// updateBookById({ rating: 1 }, 14);
// updateBookById({ rating: 4, author: 'Mango' }, 10);

//----

// function removeBook(bookId) {
//   const config = {
//     method: 'DELETE',
//   };

//   return fetch(`${apiUrl}books/${bookId}`, config).then(res => res.json());
// }

// removeBook(5);

// -----

// function saveNewUser(name, city) {
//   const data = JSON.stringify({ name, city });

//   const config = {
//     method: 'POST',
//     body: data,
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };
//   return fetch(apiUrl + '/users', config).then(res => res.json());
// }

// function getAllUsers() {
//   return fetch(apiUrl + '/users').then(res => res.json());
// }
// ----
//add new user
// saveNewUser('Alex', 'London').then(data => {
//   console.log('User created', data);
// });
// ----
// //
// const allUsers = getAllUsers();
// const allUsersLog = allUsers.then(data => console.log(data));

// ----Артем 2 лекція

const addPost = document.querySelector('.js-add');
const listposts = document.querySelector('.js-posts');
const formWrapper = document.querySelector('.js-form');

addPost.addEventListener('click', handlerAddPost);

function handlerAddPost() {
  formWrapper.innerHTML = `<form action="submit" class="js-form-add">
      <input type="text" name="tittle" />
      <textarea name="body" cols="30" rows="10"></textarea>
      <button>add post</button>
    </form>`;
}
