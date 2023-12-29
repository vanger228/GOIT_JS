//  ---доступ до властивості через крапку
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     email: 'henry.carter@aptmail.com',
//   },
// };
// const ownerName = apartment.owner.name;
//---через []
// apartment['tags']
// ---зміна властивості
// apartment.imgUrl = '123';
// ---Додавання властивостей до обєкту таке ж як і зміна властивості

// ------Короткі властивості
// не так
// const name = "Henry Sibola";
// const age = 25;
// const user = {
//   name: name,
//   age: age,
// };
// а так
// const name = "Henry Sibola";
// const age = 25;
// const user = {
//   name,
//   age,
// };

// ---Властивостей обчислювальних  Синтаксис
// const propName = 'name';
// const poooopName = 'poooop';
// const user = {
//   age: 25,
//   [propName]: 'Henry Sibola',
// };

// ---Перебір обєкту
// цикл for...in
// for (key in object) {
//   // інструкції
// }
// ---Метод Object.values()
//  Object.values(object) повертає масив значень його властивостей.
// ---Метод Object.keys()
//  Object.keys(object) повертає масив ключів властивостей.

// ---масив об'єктів
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
// ];
// Для перебору такого масиву використовується стандартний цикл for...of.
// Значення властивостей кожного об'єкта можна отримати, використовуючи синтаксис «через крапку»
// for (const book of books) {
//   console.log(book); // Об'єкт книги
//   console.log(book.title); // Назва
// ---Методи об'єкта
// Методами об'єкта назиівють функцію, яка знаходиться в об'єкті, тобто вона є значенням властивості об'єкта.
// ---this Доступ до властивостей об'єкта
// const bookShelf = {
//   books: ["The Last Kingdom", "The Mist"],
//   getBooks() {
//     return this.books;
//   }
// };
