// 'use strict';
// знаходимо елемент по класу
// const button = document.querySelector(`button.btn`)
// console.log(button)

// знаходимо по тегу
// const myLink = document.querySelectorAll('a');
// console.log(myLink);
// const links = document.getElementsByTagName('a');
// console.log(links);

// по класу всі
// const links = document.getElementsByClassName('youtube-link');
// console.log(links);

// по id
// const id_element = document.getElementById('link2-id');
// console.log(id_element);

// https://cdn.pixabay.com/photo/2020/05/31/16/53/bookmarks-5243253_1280.jpg

// -------------------------------------

// const imageEl = document.querySelector('.hero__image');
// const heroTitleEl = document.querySelector('.hero__title');

// heroTitleEl.textContent = 'hello';

// const url =
//   'https://cdn.pixabay.com/photo/2020/05/31/16/53/bookmarks-5243253_1280.jpg';

// перевизначаємо посилання на img
// imageEl.setAttribute('src', url);
// скорочений синтаксис
// imageEl.src = url;

// виводимо в консоль атрибут
// console.log(imageEl.getAttribute('alt'));

// видалити атрибут
// console.log(imageEl.removeAttribute('src'));

// чекаємо чи є атрибут
// console.log(imageEl.hasAttribute('src'));

// ----clasList

// const currentPageUrl = '/concat';

// const linkItem = document.querySelector(
//   `.youtube_link[href="${currentPageUrl}"]`
// );
// // додавання стилів
// linkItem.classList.add('styled-btn');
// // видалкення класу
// linkItem.classList.remove('site_nav');
// заміна класу
// linkItem.classList.replace(styled_btn, site_nav);
// перевірка чи є клас
// console.log(linkItem.classList.contains('styled-btn'));

// Метод toggle объекта classList добавляет класс, если его нет и удаляет, если есть.

// //---- створення html елемента в dom
// const titleEl = document.createElement('h2');
// titleEl.textContent = 'Hello from js';
// console.log(titleEl);

// //додаємо на сторінку
// elem.append(el1, el2, ...) — додає один або декілька елементів після всіх дітей елемента elem.
// elem.prepend(el1, el2, ...) — додає один або декілька елементів перед усіма дітьми елемента elem.
// elem.after(el1, el2, ...) — додає один або декілька елементів після елемента elem.
// elem.before(el1, el2, ...) — додає один або декілька елементів перед елементом elem.
// const hero = document.querySelector('section.hero');
// hero.append(titleEl); //додає елемент в кінець
// hero.prepend(titleEl); // додає на початок
// hero.before(titleEl); //перед
// hero.after(titleEl);//після

// створюємо зображення
// https://images.freeimages.com/365/images/previews/da4/fine-pattern-background-14639.jpg?fmt=webp&w=500

// const imageEl = document.createElement('img');
// imageEl.setAttribute(
//   'src',
//   'https://images.freeimages.com/365/images/previews/da4/fine-pattern-background-14639.jpg?fmt=webp&w=500'
// );
// imageEl.setAttribute('alt', 'flowers');
// imageEl.setAttribute('width', '240');

// const heroEl = document.querySelector('.hero');
// heroEl.append(imageEl);

// // створюємо елемент
// const navItemEl = document.createElement('li');
// navItemEl.textContent = 'Products';
// console.log(navItemEl);
// // додаємо його до списку
// const menu = document.querySelector('ul.list_videos');
// menu.prepend(navItemEl);

//----створюємо і дод колекцію

// const options = [
//   { label: 'синій', color: '#2196f3' },
//   { label: 'червоний', color: '#ff0000' },
//   { label: 'зелений', color: '#4caf50' },
//   { label: 'жовтий', color: '#ffeb3b' },
//   { label: 'помаранчевий', color: '#ff9800' },
//   { label: 'фіолетовий', color: '#9c27b0' },
//   { label: 'рожевий', color: '#e91e63' },
// ];

// const colorPikerContainerEl = document.querySelector('.color_piker');

// options.forEach(element => {
//   const a = document.createElement('li');
//   a.textContent = element.label;
//   a.style.backgroundColor = element.color;
//   a.style.color = 'white'; //таким чином можна додавати тільки inline стилі
//   colorPikerContainerEl.append(a);
// });

// варіант з методом map
// const markups = options
//   .map(option => `<li style="color: ${option.color}">${option.label}</li>`)
//   .join('');
// colorPikerContainerEl.innerHTML = markups;

// ----innerHtml
// const titleEl1 = document.querySelector('.title1');
// titleEl1.innerHTML = '<span>hello</span>'; //hello
// titleEl1.textContent = '<span>hello</span>'; //<span>hello</span>
// за допомогою innerHTML зчитується та інтерпретується тег html
// цей span тепрер в dom його можна знайти через querySelector

// .textContent так ми можемо взяти HTML контент в js
// const h = document.querySelector('h1.title1');
// console.log(h);
// console.log(h.textContent);

// ----інтеграція

// data actions
// const actions = document.querySelectorAll('.action button');
// const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
// const list = document.querySelector('.list');

// const markup = technologies
//   .map(technology => `<li class="list-item">${technology}</li>`)
//   .join('');

// console.log(markup);

// list.innerHTML = markup;

// const data = [
//   { title: 'Заголовок 1', content: 'Вміст 1' },
//   { title: 'Заголовок 2', content: 'Вміст 2' },
//   { title: 'Заголовок 3', content: 'Вміст 3' },
//   // Додайте більше об'єктів за необхідністю
// ];
// const outputContainer = document.getElementById('output');

// const listHeaders = data.map(
//   article => `<li>${article.title} contain ${article.content}</li>`
// );

// console.log(listHeaders);
// outputContainer.innerHTML = listHeaders;

// const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];

// const head = document.getElementById('1');
// technologies.forEach(technologie => head.before(technologie));
// console.log(head.textContent);

// const title = document.querySelector('#output');
// console.log(title);
// title.insertAdjacentHTML('afterbegin', '<p>fuck</p>');
// title.insertAdjacentHTML('afterbegin', '<div>pro</div>');

// ----Метод insertAdjacentHTML()

// Метод insertAdjacentHTML() — це сучасний метод для додавання рядка з HTML-тегами перед, після або всередину елемента. Він вирішує проблему innerHTML з повторною серіалізацією вмісту елемента під час додавання розмітки до вже існуючої.

// element.insertAdjacentHTML(position, string)

// Аргумент position — це рядок, який визначає позицію щодо елемента element. Він приймає одне з чотирьох значень.

//     "beforebegin" — перед element
//     "afterbegin" — всередині element, перед усіма дітьми
//     "beforeend" — всередині element, після усіх дітей
//     "afterend" — після element

// Значення "beforebegin" і "afterend" працюють тільки тоді, коли element вже знаходиться в DOM-дереві. Обмеження зумовлене тим, що неможливо дізнатися, куди вставляти розмітку, доти, доки елемент не буде перебувати в DOM-дереві.

// const list = document.querySelector('.list');

// const newTechnologies = ['React', 'TypeScript', 'Node.js'];
// const markup = newTechnologies
//   .map(technology => `<li class="list-item new">${technology}</li>`)
//   .join('');

// list.insertAdjacentHTML('beforeend', markup);
// list.insertAdjacentHTML('beforebegin', '<h2>Popular technologies</h2>');

// ----actions

// ----Метод addEventListener()

// Подія — це сигнал від браузера про те, що на вебсторінці щось відбулося. Існує багато видів подій: події миші, події клавіатури, події елементів форм, зміни розмірів вікна, завантаження зображень, буфера обміну, зміни стадії CSS анімації або переходу тощо. Події використовуються для реакції на дії користувача й виконання коду, пов'язаного з певною подією.

// Для того щоб елемент реагував на дії користувача, до нього необхідно додати слухача події та визначити йому обробника.

// Слухач події — це механізм, який "слухає" або "очікує" на виникнення певної події. Метод addEventListener() додає слухача події на елемент.

// element.addEventListener(event, handler, options)

// Аргументи методу:

// event — рядок, що містить ім'я події, наприклад, "click"
// handler — колбек-функція, яка буде викликана під час настання події
// options — необов'язковий об'єкт параметрів із розширеними налаштуваннями

// const button = document.querySelector('.my-button');

// button.addEventListener('click', () => {
//   console.log('button klicked');
// });
// У виклик addEventListener() першим аргументом ми передали ім’я події "click" , другим — функцію-обробник подій (event handler) — () => {console.log("Button was clicked")}. Кожного разу, коли на елементі button відбуватиметься подія "click", ця колбек-функція буде виконуватися й виводити в консоль повідомлення "The button was pressed and now the next image will appear".

// Для колбека можна використовувати не анонімну, а окрему функцію, передаючи на неї посилання, як це реалізовано у прикладі нижче. Іменована функція підвищує читабельність коду.

// приклад використання колбеків
// const singleBtn = document.querySelector('#single');

// const handleClick = () => {
//   console.log('click event listener callback');
// };

// singleBtn.addEventListener('click', handleClick);

// // тепер колбеки для muli btn
// const multiBtn = document.querySelector('#multiple');

// const firstCallback = () => {
//   console.log('First callback!');
// };
// const secondCallback = () => {
//   console.log('Second callback!');
// };
// const thirdCallback = () => {
//   console.log('Third callback!');
// };

// multiBtn.addEventListener('click', firstCallback);
// multiBtn.addEventListener('click', secondCallback);
// multiBtn.addEventListener('click', thirdCallback);

// ----Метод removeEventListener()

// Метод removeEventListener() видаляє слухача події з елемента.

// Аргументи аналогічні методу addEventListener():

// element.removeEventListener(event, handler, options)

// btn.removeEventListener('click', handleClick);

// ----соваємо квадрат

// const clickMe = document.querySelector('.js-click');
// const box = document.querySelector('.red-square');
// function clickHandler() {
//   let mrgn = 0;
//   mrgn += 10;
//   box.style.margin = `${mrgn}px 0 0 ${mrgn}px`;
// }
// clickMe.addEventListener('click', clickHandler);
// clickMe.removeEventListener('click', clickHandler);

// ----input, blur

// const userName = document.querySelector('.js-user-name');

// function inputHandler() {
//   console.log('input');
// }
// function blurHandler() {
//   console.log('blur');
// }

// // лісенер посуті активує передачу аргументів в функцію
// userName.addEventListener('input', inputHandler);
// userName.addEventListener('blur', blurHandler);

// ----event obj

// const userName = document.querySelector('.js-user-name-1');

// function inputHandler(event) {
//   console.log(event.target.value); //event - обєкт кожного дом елемента
// }
// function blurHandler(event) {
//   const name = event.target.value;
//   if (name !== '') {
//     alert(`Hello, ${name}`);
//   }
// } //при блюрі зявляй алерт з привітанням

// userName.addEventListener('input', inputHandler);
// userName.addEventListener('blur', blurHandler);

// ----js form

// тут ми збираємо жанні з форми в обєкт data
// const form = document.querySelector('.js-form');

// function formHandler(event) {
//   event.preventDefault();
//   const data = {
//     email: event.target.email.value,
//     password: event.target.password.value,
//     comment: event.target.comment.value,
//   };
//   console.log(data);
// }

// form.addEventListener('submit', formHandler);

// ----keyboard events

// keydown — подія, що відбувається при натисканні клавіші
// keyup — подія, що відбувається, коли клавішу відпустили
// переважно обробляють тільки подію keydown, оскільки вона відбувається швидше за keyup і користувач раніше бачить результат натискання.

// function keyHandler(event) {
//   console.log('key pressed', event);
// }
// // document тоиу що нажим клавіші реєструється глобально
// document.addEventListener('keydown', keyHandler);

// виводимо натиснуту клавішу в html

// const keyContainer = document.querySelector('.key');

// function pressHandler(event) {
//   if (event.key !== ' ') {
//     keyContainer.textContent = event.key; //key одна з властивостей event
//   } else {
//     keyContainer.textContent = 'SPACE';
//   }

//   keyContainer.textContent = 'SPACE';
// }

// function upHandler() {
//   keyContainer.textContent = null;
// } //тепер вона зникає при upHandler

// document.addEventListener('keydown', pressHandler);
// document.addEventListener('keyup', upHandler);

// приклад як зчитувати комбінації клавіш
// не працює нажаль
// function comboHandler(event) {
//   // console.log(event);
//   if (event.code === 'KeyM' && event.ctrkKey) {
//     console.log('OK');
//   }
// }

// document.addEventListener('keypress', comboHandler);

// ----Mouse events

// mouseenter - подія входження миші в елемент
// mouseleave - подія виходу за межі елемента
// mouseover - входження миші в елемент і в його дітей
//mouseout - вихід з елементів і дітей
// mousemove - виводить кожен мув миші в консоль(якщо хочимо прикріпити якийсь елемент до рухомої миші)

// const boxRef = document.querySelector('.js-box');

// boxRef.addEventListener('mousemove', event => {
//   console.log(event);
// });

// ----задача

// * Реалізуй пошук автомобілів по сайту

// * Користувач потрапляє на сайт і одразу бачить форму для пошуку і картки всіх автомобілів (масив cars)

// * Користувач може ввести в форму назву Марки або Моделі авто і в тегу селект обрати що він ввів Марку або Модель (https://prnt.sc/
// PkkZZRy_ggtT) * Після натискання кнопки пошуку (сабміт форми) відмалюй авто які збігаються з критеріями пошуку

// const cars = [
//   {
//     id: 1,
//     car: 'Audi',
//     type: 'A6',
//     price: 30000,
//     img: (src = './img/audi.png'),
//   },
//   {
//     id: 2,
//     car: 'BMW',
//     type: 'X5',
//     price: 35000,
//     img: (src = './img/bmw.png'),
//   },
//   {
//     id: 3,
//     car: 'Wolkswagen',
//     type: 'Golf',
//     price: 25000,
//     img: (src = './img/wolkswagen.png'),
//   },
//   {
//     id: 4,
//     car: 'Renault',
//     type: 'Clio',
//     price: 20000,
//     img: (src = './img/renault.png'),
//   },
// ];

// const elements = {
//   form: document.querySelector('.js-form'),
//   container: document.querySelector('.js-list'),
// };

// // renderCars повертає і додає всі тачки, з масиву cars в html
// function renderCars(cars) {}

// function formHandler(event) {
//   event.preventDefault();
//   const query = event.target.query.value;
//   const option = event.target.options.value;

//   const newCars = cars.filter(car => {
//     return car[option].toLowerCase().includes(query.toLowerCase());
//   });
//   renderCars(newCars);
// }
// elements.form.addEventListener('submit', formHandler);
