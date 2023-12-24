// -----Створення об'єкта

// Об'єкти дозволяють описати та згрупувати характеристики об'єктів реального світу, наприклад, користувач, книга, продукт магазину — чого завгодно. Об'єкти ще називають словниками, тобто вони містять терміни (властивості) та їх визначення (значення).

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   public: true,
//   rating: 8.38,
// };

// Для оголошення об’єкта використовуються фігурні дужки {} — літерал об'єкта.
// При створенні об'єкта до нього відразу можна додати властивості, але це не обов’язково. Кожна властивість обов’язково складається з пари ключ: значення.
// Ключ також називають ім'ям властивості і це зазвичай рядок.
// Значенням властивості можуть бути будь-які типи: примітиви, масиви, об'єкти, булі, функції тощо.
// Властивості між собою розділяються комою.

// apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// -----Вкладені властивості
// Значенням властивості може бути інший об'єкт
// Це використовується для зберігання вкладених і згрупованих даних.
// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];

// console.log(lastTag);

// ----Доступ до властивостей через крапку

// Перший спосіб отримати доступ до властивості об'єкта — це синтаксис objectName.key.
// На місце звернення буде повернуте значення властивості з таким ключем.
// Якщо в об'єкті відсутня властивість з таким ключем, на місце звернення повернеться undefined.
// Здебільшого синтаксис «через крапку» використовується тоді, коли ми заздалегідь знаємо ім'я (ключ) властивості, до якої хочемо отримати доступ.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
// };

// const bookTitle = book.title;
// console.log(bookTitle); // "The Last Kingdom"

// Об'єкт apartment описує квартиру і має 5 властивостей: шлях до зображення, опис, рейтинг, ціна, теги. Оголошені 4 змінні, значенням яких є значення властивостей об'єкту apartment.

// Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.

// aptRating - рейтинг;
// aptDescr - опис;
// aptPrice - ціна;
// aptTags - теги.

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// console.log(aptPrice);

// -----Доступ до вкладених властивостей

// user.location.country

// Отримати доступ до елементів масиву можна через квадратні дужки та індекс: user.hobbies[0];

// const firstHobby = user.hobbies[0];
// console.log(firstHobby); // "swimming"

// Також можна використовувати властивості й методи масиву, наприклад отримати значення його довжини з властивості length: user.hobbies.length;

// const numberOfHobbies = user.hobbies.length;
// console.log(numberOfHobbies); // 3

// -----Доступ до властивостей через квадратні дужки

// Другий спосіб отримати доступ до властивості об'єкта — це синтаксис objectName[”key”].

// Схоже на звернення до елемента масиву з відмінністю. Відмінність полягає в тому, що в квадратних дужках зазначається не індекс елемента, а рядок з ключем (ім’ям властивості).

// Синтаксис «квадратних дужок» використовується значно рідше. Як правило, у випадках, коли ім'я властивості заздалегідь не відоме або воно зберігається у змінній, наприклад як значення параметра функції.

// На місце звернення буде повернуто значення властивості з таким ім'ям.
// Якщо в об'єкті відсутня властивість з таким ім'ям, на місце звернення повернеться undefined.

// Об'єкт apartment описує квартиру з 5 властивостями: шлях до зображення, опис, рейтинг, ціна, теги. Оголошені 4 змінні, значення яких це значення відповідних властивостей об'єкту apartment.

// Доповни код, задавши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment, використовуючи синтаксис квадратних дужок.

// aptRating - рейтинг;
// aptDescr - опис;
// aptPrice - ціна;
// aptTags - теги.

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];

// Зміна значення властивостей

// Для цього необхідно звернутися до них за ключем, наприклад, «через крапку», і присвоїти нове значення.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.rating = 9;
// book.isPublic = false;
// book.genres.push("drama");

// console.log(book.rating); // 9
// console.log(book.isPublic); // false
// console.log(book.genres); // ["historical prose", "adventure", "drama"]

// Доповни код, оновивши значення властивостей об'єкта apartment:

// ціну у властивості price на 5000;
// рейтинг квартири у властивості rating на 4.7;
// ім'я власника у вкладеній властивості name на "Henry Sibola";
// масив тегів у властивості tags, додавши в кінець рядок "trusted".

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Henry Sibola';
// apartment.tags.push('trusted');

// -----Додавання властивостей до обєкту таке ж як і зміна властивості

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
// };

// book.pageCount = 836;

// додаємо обєкт в обєкт

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Henry Sibola',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country: 'Jamaica',
//   city: 'Kingston'
// }

// -----Короткі властивості

// Іноді під час створення об'єкта значення властивості необхідно взяти зі змінної або параметра функції з таким самим ім'ям, як і сама властивість.

// Синтаксис у наступному прикладі занадто громіздкий, адже доводиться дублювати ім'я властивості та ім'я змінної, в якій зберігається необхідне значення: name: name, і age: age,.

// const name = "Henry Sibola";
// const age = 25;

// const user = {
//   name: name,
//   age: age,
// };

// console.log(user.name); // "Henry Sibola"
// console.log(user.age); // 25

// Синтаксис коротких властивостей (shorthand properties) вирішує цю проблему, дозволяючи використовувати ім'я змінної як ім'я властивості, а її значення як значення властивості.

// const name = "Henry Sibola";
// const age = 25;

// const user = {
//   name,
//   age,
// };

// console.log(user.name); // "Henry Sibola"
// console.log(user.age); // 25

// Замість name: name, використали name.

// А замість age: age, — age.

// Тобто під час оголошення об'єкта достатньо вказати тільки ім'я властивості, а значення буде взято зі змінної з аналогічним ім'ям.

// const name = 'Repair Droid';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//   name,
//   price,
//   image,
//   tags,
// };

// console.log(product);

// -----Синтаксис обчислювальних властивостей

// Значенням обчислювальної властивості може бути будь-який валідний вираз.

// const propName = 'name';
// const poopName = 'poop';
// const user = {
//   age: 25,
//   [propName]: 'Henry Sibola',
// };

// console.log(user); // "Henry Sibola"

// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   [emailInputName]: 'henry.carter@aptmail.com',
//   [passwordInputName]: 'jqueryismyjam',
// };

// function calculateTotalPrice(order) {
//   let totalPrice = 0;
//   for (i = 0; i < order.length; i++) {
//     totalPrice += order[i];
//   }
//   return totalPrice;
// }
// console.log(calculateTotalPrice([1, 2, 5]));

// ------Перебір обєкту
// цикл for...in

// for (key in object) {
//   // інструкції
// }

// Перебери об'єкт apartment, використовуючи цикл for...in, і запиши в масив keys всі його ключі, а в масив values всі значення його властивостей.
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];

// for (let key in apartment) {
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
// }

// console.log(keys);
// console.log(values);

// ----Метод Object.keys()
// Вбудований клас Object має кілька корисних методів для роботи з об'єктами.

// Перший з них — це Object.keys(object), який приймає об'єкт і повертає масив ключів його властивостей. Якщо в об'єкті немає властивостей, метод поверне порожній масив.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']

// Скомбінувавши результат Object.keys() і цикл for...of, можна зручно перебрати властивості об'єкта, не вдаючись до використання циклу for...in.

// const book = {
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys){
//   console.log(key); // Ключ
//   console.log(book[key]); // Значення властивості
// }

// Ми перебираємо масив ключів об'єкта і на кожній ітерації отримуємо ключ і значення властивості.

// Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of. Запиши у змінну keys масив ключів властивостей об'єкта apartment, і додай в масив values всі значення його властивостей.

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
// // [ 'descr', 'rating', 'price' ]
// // console.log(keys);
// for (let key of keys) {
//   values.push(apartment[key]);
// }
// console.log(values);
