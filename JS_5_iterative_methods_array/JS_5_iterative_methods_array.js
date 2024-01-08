'use strict';
//----callback function
// function greet(name) {
//   return `Welcome ${name}!`;
// }

// // Викликаємо функцію greet і виводимо результат у консоль
// console.log(greet("Mango")); // "Welcome Mango!"

// // Виводимо функцію greet у консоль, не викликаючи її
// console.log(greet); // ƒ greet() {return `Welcome ${name}!`}

// У другому лозі передається посилання на функцію, а не результат її виклику (відсутні круглі дужки), тому в консоль виводиться внутрішнє представлення нашої функції. Це означає, що посилання на функцію можна записати у змінну або передати як аргумент іншій функції.
// function makePizza() {
//   return 'Your pizza is being prepared, please wait.';
// }
// const result = makePizza();
// const pointer = makePizza;
// console.log(pointer());

// function greet(name) {
//   console.log(`Welcome ${name}!`);
// }

// function notify(name) {
//   console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// }

// function registerGuest(name, callback) {
//   console.log(`Registering ${name}!`);
//   callback(name);
// }

// registerGuest('Mango', greet); // "Registering Mango!"
// // "Welcome Mango!"

// registerGuest('Mango', notify); // "Registering Mango!"
// // "Dear Mango, your room will be ready in 30 minutes"

// Функція makeMessage приймає один параметр ім'я піци, що доставляється, pizzaName та повертає рядок з повідомленням клієнту.

// Доповни функцію makeMessage таким чином, щоб вона очікувала другим параметром (параметр callback) колбек-функцію і повертала результат її виклику. Функції deliverPizza або makePizza будуть передаватися як колбек для makeMessage і очікувати аргументом ім'я готової піци, що доставляється.

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {//замість callback підставояється функція з виклику, тільки якщо вона ініціалізована раніше
//   return callback(pizzaName);
// }
// console.log(makeMessage('Royal Grand', makePizza)); //"Pizza Royal Grand is being prepared, please wait..."
// console.log(makeMessage('Ultracheese', deliverPizza)); //повертає рядок "Delivering Ultracheese pizza."

// ----Inline callback function

// function registerGuest(name, callback) {
//   console.log(`Registering ${name}!`);
//   callback(name);
// }

// // Передаємо інлайн-функцію greet у якості колбека
// registerGuest('Mango', function greet(name) {
//   console.log(`Welcome ${name}!`);
// });

// // Передаємо інлайн-функцію notify у якості колбека
// registerGuest('Poly', function notify(name) {
//   console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// });

// Функція makePizza має два параметри: pizzaName - ім'я піци та callback - колбек-функцію. Під час виконання, makePizza викликає цей колбек, передаючи йому pizzaName як аргумент.

// Доповни другий виклик функції makePizza(pizzaName, callback), передавши другим аргументом інлайн колбек-функцію eatPizza(pizzaName). Колбек eatPizza логує рядок "Eating pizza <назва піци>", де <назва піци> це значення параметра pizzaName.

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza('Royal Grand', function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}`);
// });

// makePizza('Ultracheese', function eatPizza(pizzaName) {
//   console.log(`Eating pazza ${pizzaName}`);
// });

//----Метод forEach(callback)

// const arr = [2, 4, 5, 7, 8, 4];
// // item -ітеруємий елемент
// // idx - індекс поточного елемента
// // arr - масив який ітеруємо
// arr.forEach(function (item, idx, arr) {
//   //в циклі forEach не працює break
//   console.log('item', item);
//   console.log('idx', idx);
//   console.log('arr', arr);
//   //return поверне undefined, присвоєння arr.forEach змінній - немає сенсу
// });

// arr.forEach(function (item, i) {
//   arr[i] = item * 2;
// }); //коротко перемножили всі числа масиву на 2
// console.log(arr);

// Поелементно перебирає масив array
// Викликає колбек-функцію для кожного елемента масиву
// Повертає undefined, навіть якщо явно задати вираз після return

// ось поріняння

// const numbers = [5, 10, 15, 20, 25];

// Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Index ${i}, value ${numbers[i]}`);
// }

// Перебираючий метод forEach
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });

// Єдиний випадок, коли варто використовувати цикли for або for...of для перебирання масиву, — це задачі з перериванням виконання циклу.

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (number) {
//     totalPrice += number;
//   });

//   return totalPrice;
// }
// Функція filterArray(numbers, value) приймає першим параметром масив чисел numbers і повертає новий масив, в якому будуть тільки ті елементи оригінального масиву, які більші за значення другого параметра числа value. Якщо таких значень не буде знайдено, функція повертає порожній масив.

// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.
// function filterArray(numbers, value) {
//   let filterredArray = [];
//   numbers.forEach(function (item) {
//     if (item > value) {
//       filterredArray.push(item);
//     }
//   });
//   return filterredArray;
// }

// ----Стрілочні функції

// Звичайне оголошення функції
// function classicAdd(a, b, c) {
//   return a + b + c;
// }

// // Те саме стрілочною функцією
// const arrowAdd = (a, b, c) => {
//   return a + b + c;
// };

// Ключове слово function не використовується
// Одразу зазначається оголошення параметрів
// Після параметрів використовується символ => і тіло функції у фігурних дужках

// Якщо параметр один, його можна оголошувати без круглих дужок.

// const add = a => {
//   return a + 5;
// };

// Якщо параметри відсутні, то обов'язково повинні бути порожні круглі дужки.

// const greet = () => {
//   console.log("Hello!");
// };

// Виконай рефакторинг функції calculateTotalPrice() таким чином, щоб вона була оголошена як стрілочна.

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };

// Запис без фігурних дужок

// Якщо фігурні дужки відсутні, то повертається результат виразу, який стоїть після =>. Це називається неявне повернення (implicit return). У прикладі повернеться результат виразу додавання параметрів a, b і c.

// const add = (a, b, c) => a + b + c;

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// -----Псевдомасив arguments

// У стрілочних функцій немає локальної змінної arguments, що містить усі аргументи. Якщо необхідно зібрати всі аргументи в масив, використовується операція rest.

// const add = (...args) => {
//   console.log(args);
// };

// add(1, 2, 3); // [1, 2, 3]

// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) =>
//   console.log(`Inex ${index}, value ${number}`);

// numbers.forEach(logMessage);

// example of using 2 callback

// // Колбек-функція для виведення повідомлення
// const logMessage = (number, index) => {
//   console.log(`Index ${index}, value ${number}`);
// };

// // Колбек-функція для підняття числа до квадрату
// const squareNumber = (number, index) => {
//   const squaredValue = number * number;
//   console.log(`Index ${index}, squared value ${squaredValue}`);
// };

// // Функція, яка використовує кілька колбек-функцій
// const processNumbers = (numbers, callback1, callback2) => {
//   console.log('Processing with logMessage:');
//   numbers.forEach(callback1);
//   //Метод forEach викликає функцію, яка передана як
//   //callback1, для кожного елемента масиву numbers. Кожного разу, коли forEach обробляє новий елемент масиву, він викликає функцію callback1 з двома аргументами: number (значення елемента масиву) та index (індекс елемента в масиві). У даному контексті callback1 - це колбек-функція logMessage, яку ти передав у функцію processNumbers. Таким чином, для кожного елемента масиву numbers, викликається функція logMessage і виводяться повідомлення у консоль, які містять індекс та значення елемента.
//   console.log('\nProcessing with squareNumber:');
//   numbers.forEach(callback2);
// };

// const numbers = [5, 10, 15, 20, 25];

// // Виклик функції processNumbers з передачею двох колбек-функцій
// processNumbers(numbers, logMessage, squareNumber);

// Виконай рефакторинг функції calculateTotalPrice(orderedItems), замінивши її оголошення на стрілочну функцію. Також заміни колбек-функцію, передану в метод forEach(), на стрілочну функцію.

// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;

//   orderedItems.forEach(item => {
//     totalPrice += item;
//   });
// };
// Заміни оголошення функції filterArray() і колбек для методу forEach() на стрілочні функції.

// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// };

// ----чисті функції

// const pureMultiply = (array, value) => {
//   const newArray = [];

//   array.forEach(element => {
//     // newArray.push(element * value);
//     console.log(element);
//   });

//   return newArray;
// };

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers, 2);

// // Мутація вихідних даних не відбулася
// console.log(numbers); // [1, 2, 3, 4, 5]
// // Функція повернула новий масив зі зміненими даними
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// чиста функція не змінює передаваємий в неї масив, а створює новий

// Функція changeEven(numbers, value) приймає масив чисел numbers і оновлює кожен елемент, значення якого - це парне число, додаючи до нього значення параметра value, який точно є числом.

// Виконай рефакторинг функції таким чином, щоб вона стала чистою - не змінювала масив чисел numbers, а створювала, наповнювала і повертала новий масив з оновленими значеннями.

// function changeEven(numbers, value) {
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//   }
// }

// function changeEven(numbers, value) {
//   let newNumbers = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     numbers[i] % 2 === 0
//       ? newNumbers.push(numbers[i] + value)
//       : newNumbers.push(numbers[i]);
//   }
//   return newNumbers;
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10));

// ось та ж функція через forEach

// function changeEven(numbers, value) {
//   let newNumbers = [];
//   numbers.forEach(number => {
//     newNumbers.push(number % 2 === 0 ? number + value : number);
//   });
//   return newNumbers;
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10));

// ----перебираючі методи

// array.method(callback(currentValue, index, array) => {
// логіка, яка буде виконуватися на кожній ітерації
// });

// ----Метод map(callback)
//  використовується для трансформації масиву.Він викликає колбек - функцію для кожного елемента вихідного масиву, а результат її роботи записує в новий масив, який і буде результатом виконання методу.

// array.map((element, index, array) => {
//   // Тіло колбек-функції
// });

// Поелементно перебирає оригінальний масив
// Не змінює оригінальний масив
// Результат роботи колбек-функції записується в новий масив
// Повертає новий масив такої ж довжини, як і в масиву, до якого він був застосований

// Його можна використовувати для того, щоб змінити кожен елемент масиву. Оригінальний масив використовується як еталон, на основі якого можна зробити іншу колекцію.

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]

// const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
// console.log(planetsInLowerCase); // ["earth", "mars", "venus", "jupiter"]

// // Оригінальний масив не змінився
// console.log(planets); // ["Earth", "Mars", "Venus", "Jupiter"]

// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];

// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths); //[ 5, 4, 5, 7 ]

// ----масив обєктів перебір map
// Масив books містить колекцію об'єктів книг, кожен з яких містить властивості title, author, rating. Використовуючи метод map(), зроби так, щоб у змінній titles вийшов масив назв усіх книг (властивість title) з масиву books.

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];

// const titles = books.map(book => book.title);
// console.log(titles);

// Нехай у нас є масив books з об'єктами книг, і тепер ми хочемо створити новий масив highRatedBooks, який містить тільки ті книги, які мають рейтинг вищий за певний поріг (наприклад, 4.0). Використовуйте метод map та filter для вирішення цієї задачі:
// const books = [
//   { title: 'Book1', author: 'Author1', rating: 4.5 },
//   { title: 'Book2', author: 'Author2', rating: 3.8 },
//   { title: 'Book3', author: 'Author3', rating: 4.2 },
//   { title: 'Book4', author: 'Author4', rating: 3.9 },
//   { title: 'Book5', author: 'Author5', rating: 4.7 },
// ];

// const highRatedBooks = books
//   .filter(book => book.rating > 4)
//   .map({ title: book.title, rating: book.rating });

// Масив books містить колекцію об'єктів книг, кожен з яких містить властивість genres, значенням якої є масив жанрів. Використовуючи метод flatMap(), зроби так, щоб у змінній genres вийшов масив жанрів усіх книг (властивість genres) з масиву books.

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism'],
//   },
// ];

// const genres = books.flatMap(book => book.genres);
// console.log(genres);
