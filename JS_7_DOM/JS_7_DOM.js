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

// // створення html елемента в dom
// const titleEl = document.createElement('h2');
// titleEl.textContent = 'Hello from js';
// console.log(titleEl);

// //додаємо на сторінку
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

// const colorPikerContainerEl = document.querySelector('.color-piker');

// options.forEach(element => {
//   const a = document.createElement('div');
//   a.textContent = element.label;
//   a.style.backgroundColor = element.color;
//   a.style.color = 'white'; //таким чином можна додавати тільки inline стилі
//   colorPikerContainerEl.append(a);
// });

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

// const titleEl = document.querySelector('h3.title3');
// titleEl.insertAdjacentHTML('afterEnd', 'hello'); //є иакі варіки: beforeBegin, afterBegin, beforeEnd, afterEnd

// data actions
// const actions = document.querySelectorAll('.action button');
