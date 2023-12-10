// Інструкція if дозволяє виконати певний блок коду тільки в тому випадку, якщо задана умова істинна (тобто приймає значення true).
// let price = 0;
// const sub = "pro";
// if (sub === "pro") {
//   price = 100;
// }

// console.log(price);

// Доповни код функції checkAge(age) так, щоб функція повертала рядок "You are an adult", якщо значення параметра age більше або дорівнює 18. Використай у тілі функції інструкцію if для перевірки значення age.

// function checkAge(age) {
//   if (age >= 18) {
//     console.log("You are an adult");
//   }
// }
// checkAge(19);

// function checkAge(age) {
//   if (age >= 18) {
//     return "You are an adult";
//   } else {
//     return "You are not adult";
//   }
// }
// let age = 17;
// const result = checkAge(age);
// console.log(result);

// тут передаємо через іншу змінну

// function checkAge(age) {
//   if (age >= 18) {
//     return "You are an adult";
//   }
// }
// const age_1 = 19;
// const result = checkAge(age_1);
// console.log(result);

// // ------------
// const grade = 95;
// if (grade >= 70) {
//   console.log("Satisfactorily");
// } else {
//   console.log("Unsatisfactorily");
// }

// exersise----------------------------------------
// Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про результат.
// available - доступна кількість товарів на складі
// ordered - кількість одиниць товару в замовленні

// function checkStorage(available, ordered) {
//   if (ordered > available) {
//     return "Not enough goods in stock!";
//   } else {
//     return "Order is processed, our manager will contact you";
//   }
// }
// const available = 20;
// const ordered = 30;
// const result = checkStorage(available, ordered);
// console.log(result);
// ---------------------------------------------

// Блок else...if
// умови перевіряються почерзі, Перевірка зупиняється, щойно програма знаходить першу умову, яка задовільняється.
// if (4 > 3) {
//   console.log(1);
// } else if (3 > 2) {
//   console.log(2);
// } else if (4 > 1) {
//   console.log(3);
// } else {
// }
// another example
// const grade = 71;
// if (grade >= 90) {
//   console.log("perfect");
// } else if (grade >= 80) {
//   console.log("good");
// } else if (grade >= 70) {
//   console.log("Satisfactorily");
// } else {
//   console.log("Unsatisfactorily");
// }

// Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику.

// available - доступна кількість товарів на складі
// ordered - кількість одиниць товару в замовленні
// Використовуючи розгалуження, доповни код функції таким чином, щоб:

// Якщо в замовленні ще немає товарів, тобто значення параметра ordered дорівнює 0, функція повертає рядок "There are no products in the order!".
// Якщо товарів у замовленні більше, ніж їх доступно на складі, то функція повертає рядок "Your order is too large, there are not enough items in stock!".
// В іншому випадку функція повертає рядок "The order is accepted, our manager will contact you".

// function checkStorage(available, ordered) {
//   if (ordered == 0) {
//     return "There are no products in the order!";
//   } else if (ordered > available) {
//     return "Your order is too large, there are not enough items in stock!";
//   } else {
//     return "The order is accepted, our manager will contact you";
//   }
// }
// let available = 200;
// let ordered = 250;
// const result = checkStorage(available, ordered);
// console.log(result);

// Тернарний оператор---------------
// <condition> ? <expression if condition is true> : <expression if condition is false>
// Він працює таким чином:

// обчислюється умова condition;
// якщо умова істинна (перетворюється до true), обчислюється вираз після ?;
// якщо умова хибна (перетворюється до false), обчислюється вираз після :;
// значення обчисленого виразу повертається як результат роботи тернарного оператора.

// ось по старому
// let type;
// const age = 12;

// if (age >= 18) {
//   type = "adult";
// } else {
//   type = "child";
// }

// ось по новому

// console.log(type); // 'adult'

// const age = 12;
// const type = age >= 18 ? "adult" : "child";
// console.log(type); // 'adult'

// a тут ми заміняємо else if тернарним оператором-----

// const age = 51;
// const type =
//   age <= 18 ? "child" : age <= 22 ? "did" : age <= 50 ? "xyu" : "died";
// console.log(type);

// другий приклад------

// const a = 5;
// const b = 10;
// let biggerNumber;

// if (a > b) {
//   biggerNumber = a;
// } else {
//   biggerNumber = b;
// }

// console.log(biggerNumber); // 10

// тепер тернарним
// const a = 5;
// const b = 10;
// let biggerNumber = a > b ? a : b;

// console.log(biggerNumber); // 10

// Функція checkPassword(password) порівнює переданий їй пароль (параметр password) зі збереженим паролем адміністратора (correctPassword) і повертає рядок з повідомленням про результат.

// Використовуючи тернарний оператор, доповни функцію таким чином, щоб:

// Якщо значення password і correctPassword збігаються, функція повертала рядок "Access granted"
// В іншому випадку, функція повертала рядок "Access denied, wrong password!"

function checkPassword(password) {
  const correctPassword = "jqueryismyjam";
  password === correctPassword
    ? "Access granted"
    : "Access denied, wrong password!";
}
let password = "jqueryismyjam";
const result = checkPassword(password);
console.log(result);
