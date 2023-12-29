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

// ----- Властивостей обчислювальних  Синтаксис

// Значенням обчислювальної властивості може бути будь-який валідний вираз.

// const propName = 'name';
// const poooopName = 'poooop';
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

// for (const key in apartment) {
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
// for (const key of keys) {
//   values.push(apartment[key]);
// }
// console.log(values);

// Виконай рефакторинг функції countProps(object), замінивши перебір ключів за допомогою циклу for…in на метод Object.keys() для отримання масиву властивостей. Функція має повернути кількість властивостей в об'єкті object.

// function countProps(object) {
//   let propCount = 0;
//   const keys = Object.keys(object);
//   for (const key of keys) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
// }

// const result = countProps(
//   (book = {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['historical prose', 'adventure'],
//     rating: 8.38,
//   })
// );
// console.log(result);

// -----Метод Object.values()

//  Object.values(object) повертає масив значень його властивостей.

// Запиши у змінну keys масив ключів властивостей об'єкта apartment, а у змінну values - масив їх значень. Використовуй методи Object.keys() і Object.values().

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// Функція countTotalSalary(salaries) приймає об'єкт зарплат (salaries) в якості параметра. Кожна властивість об'єкта salaries — це ключ, що містить ім'я співробітника, та значення - його відповідна зарплатня.

// Доповни код функції countTotalSalary(salaries) так, щоб вона повертала загальну суму зарплат всіх співробітників.

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   const values = Object.values(salaries);
//   for (const i of values) {
//     totalSalary += i;
//   }
//   return totalSalary;
// }

// const result = countTotalSalary({ mango: 100, poly: 150, alfred: 80 });
// console.log(result);

// ----Масив обєктів
// Об'єкти дозволяють згрупувати описові характеристики сутності, наприклад користувача, книги, автомобіля

// описуємо бібліотеку

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
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
// ];

// Для перебору такого масиву використовується стандартний цикл for...of.

// Значення властивостей кожного об'єкта можна отримати, використовуючи синтаксис «через крапку» (див. тему Об’єкти. Доступ до властивостей через крапку), оскільки в кожному об'єкті набір властивостей та їх імена будуть однакові, відрізнятимуться тільки значення.

// for (const book of books) {
//   console.log(book); // Об'єкт книги
//   console.log(book.title); // Назва
//   console.log(book.author); // Автор
//   console.log(book.rating); // Рейтинг
// }

// Масив colors містить колекцію кольорів. Кожен колір представлений об'єктом і має властивості hex і rgb з відповідними для цього формату і кольору значеннями.

// Перебери масив об'єктів colors, використовуючи цикл for...of. Додай у масив hexColors значення властивостей hex, а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// ----Пошук об'єкта за значенням властивості

// Стандартне завдання під час роботи з масивом об'єктів — це пошук об'єкта за значенням властивості. Наприклад, потрібно знайти книгу за її автором. Для цього необхідно:

// перебрати масив у циклі
// додати умову, виконання якої означатиме успішний результат пошуку

// const books = [
//   { title: 'The Last Kingdom', author: 'Bernard Cornwell' },
//   { title: 'Beside Still Waters', author: 'Robert Sheckley' },
//   { title: 'The Dream of a Ridiculous Man', author: 'Fyodor Dostoevsky' },
// ];

// const authorToSearchFor = 'Robert Sheckley';

// for (const book of books) {
//   if (book.author === authorToSearchFor) {
//     console.log(book);
//     console.log(book.title);
//     console.log(book.rating);
//   }
// }

// Функція getProductPrice(productName) приймає один параметр productName - назва продукту. Функція містить масив об'єктів products з такими властивостями, як name — ім'я товару, price — ціна і quantity — кількість.

// Доповни код функції так, щоб вона шукала об'єкт продукту з певним ім'ям (властивість name) в масиві products і повертала його ціну (властивість price). Якщо продукт з такою назвою не знайдений, функція повинна повертати null.

// function getProductPrice(productName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return null;
// }

// const a = getProductPrice('Grip');
// console.log(a);

//-----Колекція значень властивості

// Типова задача під час роботи з колекцією об'єктів — це отримання масиву всіх значень певної властивості об'єктів. Наприклад, взяти з масиву об'єктів, які описують книги, усі назви або рейтинг.

// Для цього необхідно:

// Створити новий порожній масив для зберігання значень властивостей
// Перебрати масив об'єктів у циклі
// На кожній ітерації додати в новий масив значення необхідної властивості

// Наприклад, отримаємо список назв усіх книг у колекції books.

// const books = [
//   { title: 'The Last Kingdom', author: 'Bernard Cornwell', rating: 8.2 },
//   { title: 'Beside Still Waters', author: 'Robert Sheckley', rating: 9 },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 6.8,
//   },
// ];

// const titles = [];
// for (const book of books) {
//   titles.push(book.title);
// }
// console.log(titles);

// console.log(titles); // ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man"]

// // Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості. Функція повинна повернути масив усіх значень властивості з таким ім'ям з кожного об'єкта в масиві products. Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.
// function getAllPropValues(propName) {
//   const allValues = [];
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];
//   for (const product of products) {
//     if (product[propName]) {
//       //Цей варіант працює, оскільки якщо product[propName] існує, то воно розглядається як true.
//       allValues.push(product[propName]); //ми не юзаємо products.product[propName] тому що в конкретній ітерації ми і так знаходимось на конкретному об'єкті
//     }
//   }
//   return allValues;
// }

// console.log(getAllPropValues(['pice']));

// Функція calculateTotalPrice(productName) приймає один параметр productName- назва товару. Функція містить масив об'єктів products з такими властивостями, як name — ім'я товару, price — ціна і quantity — кількість.

// Доповни код функції так, щоб вона повертала загальну вартість (ціна * кількість) товару з таким ім'ям з масиву products.

// Якщо продукту з такою назвою немає, то функція повинна повертати рядок "Product <productName> not found!" , де <productName> — це ім'я товару.

// function calculateTotalPrice(productName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price * product.quantity;
//     }
//   }
//   return `Product ${productName} not found!`;
// }
// const a = calculateTotalPrice('Droid');
// console.log(a);

// Функція findEmployeeSalary(employeeName) приймає один параметр employeeName - ім'я працівника. Функція містить масив об'єктів employees з такими властивостями, як name - ім'я працівника, salary - зарплата і position - посада.

// Доповни код функції так, щоб вона повертала зарплату працівника з таким ім'ям з масиву employees.

// Якщо працівника з таким ім'ям немає, то функція повинна повертати рядок "Employee <employeeName> not found!" , де <employeeName> — це ім'я працівника.

// function findEmployeeSalary(employeeName) {
//   const employees = [
//     { name: 'John', salary: 50000, position: 'Developer' },
//     { name: 'Anna', salary: 60000, position: 'Manager' },
//     { name: 'Peter', salary: 75000, position: 'Designer' },
//     { name: 'Emily', salary: 45000, position: 'Tester' },
//   ];
//   for (const employee of employees) {
//     if (employee.name === employeeName) {
//       return employee.salary;
//     }
//   }
//   return `Employee ${employeeName} not found!`;
//   // Тут допишіть код для пошуку і повертання зарплати працівника або повідомлення про відсутність працівника
// }

// // Приклад використання:
// console.log(findEmployeeSalary('John')); // Повинно вивести 50000
// console.log(findEmployeeSalary('Mary')); // Повинно вивести "Employee Mary not found!"

// Функція findMaxSalaryPosition(position) приймає один параметр position - назва посади. Функція містить масив об'єктів employees з такими властивостями, як name - ім'я працівника, salary - зарплата і position - посада.

// Доповни код функції так, щоб вона повертала ім'я працівника з максимальною зарплатою для вказаної посади.

// Якщо працівників з такою посадою немає, то функція повинна повертати рядок "No employees found for position <position>!" , де <position> — це назва посади.

// function findMaxSalaryPosition(position) {
//   let maxSalary = -1;
//   let higlySalaryEmoloyee = '';
//   const employees = [
//     { name: 'John', salary: 50000, position: 'Developer' },
//     { name: 'Anna', salary: 60000, position: 'Manager' },
//     { name: 'Peter', salary: 75000, position: 'Designer' },
//     { name: 'Emily', salary: 80000, position: 'Manager' },
//     { name: 'Mike', salary: 70000, position: 'Developer' },
//   ];
//   for (const employee of employees) {
//     if (position === employee.position && employee.salary > maxSalary) {
//       maxSalary = employee.salary;
//       higlySalaryEmoloyee = employee.name;
//     }
//   }
//   if (higlySalaryEmoloyee === '') {
//     return `No employees found for position ${position}!`;
//   }
//   return higlySalaryEmoloyee;

//   // Тут допишіть код для пошуку і повертання імені працівника з максимальною зарплатою для вказаної посади або повідомлення про відсутність працівників
// }
// const a = findMaxSalaryPosition('Manager');
// console.log(a);
// Приклад використання:
// console.log(findMaxSalaryPosition('Developer')); // Повинно вивести "Mike"
// console.log(findMaxSalaryPosition('Manager')); // Повинно вивести "Emily"
// console.log(findMaxSalaryPosition('Tester')); // Повинно вивести "No employees found for position Tester!"

// -----Методи об'єкта
// Методами об'єкта назиівють функцію, яка знаходиться в об'єкті, тобто вона є значенням властивості об'єкта.
// const obj = {
//   method(value) {
//     console.log(`I'm a method with ${value}!`);
//   },
// };

// obj.method(5); // "I'm a method with 5!"
// obj.method(10); // "I'm a method with 10!"

// До нас звернулася власниця крамниці зілля «У старої жаби» і замовила програму для ведення інвентарю. Програма має додавати, видаляти, шукати та оновлювати зілля.

// Оголоси об'єкт atTheOldToad з наступними властивостями:

// potions — масив, де будуть зберігатися зілля. Нехай зараз він буде порожнім
// getPotions() — метод, який повертає рядок "List of all available potions"
// addPotion(potionName) — метод, який повертає рядок "Adding <potionName>", де potionName — це значення параметра potionName

// const atTheOldToad = {
//   potions: [],
//   getPotions() {
//     return 'List of all available potions';
//   },
//   addPotion(potionName) {
//     return `Adding ${potionName}`;
//   },
// };

// Задача 1
// Оголоси об'єкт user з наступними властивостями:
// name — ім'я користувача
// email — електронна адреса користувача
// phone — телефонний номер користувача
// Створи метод getInfo(), який повертає рядок з інформацією про користувача у форматі:
// Name: <name>
// Email: <email>
// Phone: <phone></phone>
// let userName = 'Aaron';
// const user = {
//   userName,
//   email: 'aaron@gmail.com',
//   phone: '0946378647',
//   getInfo() {
//     return `Name: ${user.userName} Email: ${user.email} Phone: ${user.phone}`;
//   },
// };
// console.log(user.getInfo());

// ---- this Доступ до властивостей об'єкта
// Для доступу до об'єкта в методі використовується не ім'я змінної цього об’єкта, наприклад bookShelf, а ключове слово this.

// Для доступу до властивостей об'єкта в методах звертаємось до нього через this і далі, стандартно, «через крапку» до властивостей.

// const bookShelf = {
//   books: ["The Last Kingdom", "The Mist"],
//   getBooks() {
//     return this.books;
//   }
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist"]

// Логічно замислитися, чому б не використовувати ім'я об'єкта у зверненні до властивостей?

// Адже ми явно не збираємося його змінювати.

// Справа в тому, що ім'я об'єкта — річ ненадійна. Методи одного об'єкта можна копіювати в інший (з іншим ім'ям), а в майбутньому дізнаємось, що часто при створенні об'єкта ми наперед зовсім не знаємо імені. Використання this гарантує, що метод працює саме з тим об'єктом, який його викликав.

// Об'єкт atTheOldToad має наступні властивості:

// potions — масив рядків, з назвами зілль
// getPotions() — метод, який повертає рядок "List of all available potions"
// Зміни код метода об'єкта getPotions() так, щоб він повертав значення властивості potions

// const atTheOldToad = {
//   potions: ['Speed potion', 'Stone skin'],
//   getPotions() {
//     return this.potions;
//   },
// };

// б'єкт atTheOldToad має наступні властивості:

// potions — масив рядків, з назвами зілль
// getPotions() — метод, який повертає значення властивості potions
// addPotion() — метод, який приймає параметр рядок з назвою зілля potionName
// Зміни код методу addPotion(potionName) так, щоб він додавав зілля potionName в кінець масиву у властивості potions.
// const atTheOldToad = {
//   potions: ['Speed potion', 'Stone skin'],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     this.potions.push(potionName);
//   },
// };

// Тепер метод getBooks повертатиме масив об'єктів. А метод addBook очікує в параметрі не рядок, а об'єкт книги і додає його в масив у властивості books.

// const bookShelf = {
//   books: [
// 		{ title: "The Last Kingdom", rating: 8 },
// 		{ title: "The Mist", rating: 6 }
// 	],
//   getBooks() {
//     return this.books;
//   },
//   addBook(newBook) {
//     this.books.push(newBook);
//   }
// };

// bookShelf.addBook({ title: "Dream Guardian", rating: 9 });
// покупка тлф
// const product = {
//   name: 'phone',
//   price: 1000,
//   quantity: 3,
//   setQuantity(newQuantity) {
//     return (this.quantity = newQuantity);
//   },
//   getPrice() {
//     return this.price * this.quantity;
//   },
// };
// product.setQuantity(3);
// console.log(product.getPrice());

// Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною. Тому зараз у властивості potions буде зберігатися масив об'єктів з властивостями name та price.

// Об'єкт atTheOldToad має наступні властивості:

// potions — масив рядків, з назвами зілль
// getPotions() — метод, який повертає значення властивості potions
// addPotion() — метод, який приймає параметр об'єкт нового зілля newPotion і додає його в кінець масиву у властивості potions.
// Додай метод getTotalPrice(), який має повертати загальну вартість усіх зілль з властивості potions.

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {
//     let totalSum = 0;
//     for (const potion in this.potions) {
//       totalSum += this.potions[potion].price;
//     }
//     return totalSum;
//   },
// };
// atTheOldToad.addPotion({ name: 'Weed potion', price: 1000 });
// const totalPrice = atTheOldToad.getTotalPrice();
// console.log('Total price of all potions:', totalPrice);

// const bookShelf = {
//   books: [
//     { title: 'The Last Kingdom', rating: 8 },
//     { title: 'The Mist', rating: 6 },
//   ],
//   changeRating(bookName, newRating) {
//     for (const book of this.books) {
//       if (bookName === book.title) {
//         book.rating = newRating;
//       }
//     }
//   },
// };

// Об'єкт atTheOldToad має наступні властивості:

// potions — масив об'єктів зілль
// getPotions() — метод, який повертає значення властивості potions
// updatePotionName() — метод, який приймає два параметра рядків oldName і newName
// Доповни метод updatePotionName(oldName, newName) таким чином, щоб він оновлював назву зілля з oldName на newName в масиві зілля у властивості potions.

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (oldName === potion.name) {
//         potion.name = newName;
//       }
//     }
//   },
// };

// atTheOldToad.updatePotionName('Speed potion', 'Super Speed potion');
// console.log(atTheOldToad.getPotions());
