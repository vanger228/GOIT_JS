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
// item -ітеруємий елемент
// idx - індекс поточного елемента
// arr - масив який ітеруємо
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

// ось поріаяння

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

function calculateTotalPrice(quantity, pricePerItem) {
  return quantity * pricePerItem;
}
