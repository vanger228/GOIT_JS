"use strict";
// let username = "max";
// let age;
// age = 34;

// console.log(username);
// console.log(age);
// age = 12;
// console.log(age);

// const adress = "Kyiv";
// console.log(adress);

// let number = 23;
// let q = 12.3;
// let name = "Mir";
// let bool = false;
// let w;
// let r = null;
// console.log(typeof r);

// ------------------lms hw-------------------

// --------comparison operators-----------
// Додай код, який записує у змінні наступні значення:

// courseTopicLength - довжина рядка
// firstElement - перший символ рядка
// lastElement - останній символ рядка (використовуй змінну courseTopicLength)

// const courseTopic = "JavaScript essentials";

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);

// Оголоси змінну isAdult та задай їй результат перевірки значення змінної age.Використай оператори порівняння та доповни код так, щоб значенням isAdult було true, якщо вік користувача більше або дорівнює 18 та false, якщо менше 18.

// const age = 16;
// const isAdult = age >= 18;
// console.log(isAdult);

//Оголоси змінну isValid і задай їй значенням результат перевірки рівності паролей в змінних correctPassword і userPassword.
// Якщо паролі співпадають (сувора рівність), значення isValid має бути true
// Якщо паролі не співпадають, значення isValid має бути false

// const correctPassword = "jqueryismyjam";
// const userPassword = "mangodab3st";
// const isValid = correctPassword === userPassword;
// console.log(isValid);

// Змінна value містить величину у вигляді рядка, що складається з числової частини та одиниці виміру. Наприклад, 24.5px, 14cm, 20.3vh тощо.

// Оголоси змінну numerical і доповни код таким чином, щоб:

// Якщо це можливо, значенням змінної numerical буде число з плаваючою крапкою, що утворилось з рядка змінної value
// В іншому випадку, значенням numerical буде NaN.

// console.log(Number.parseFloat("5.5")); // 5.5

// const value = "24.5px";
// const numerical = Number.parseFloat(value);
// console.log(numerical);

// Арифметичні функції
// округлення
// console.log(Math.floor(1.3)); // 1
// console.log(Math.floor(1.7)); // 1

// console.log(Math.ceil(1.3)); // 2
// console.log(Math.ceil(1.7)); // 2

// console.log(Math.round(1.3)); // 1
// console.log(Math.round(1.7)); // 2

// console.log(Math.random()); // випадкове число між 0 і 1, наприклад 0.2 ... 0.9166353649342294
// Наприклад, результат 0.1 + 0.2 не дорівнює 0.3. Число 0.1 у двійковій системі зчислення, яку використовує комп'ютер — це нескінченний дріб. Двійкове значення нескінченних дробів зберігається лише до певного знака, тому виникає неточність. При додаванні 0.1 і 0.2 дві неточності складаються, виходить незначна, але все ж таки помилка в обчисленнях.

// console.log(0.1 + 0.2 === 0.3); // false
// console.log(0.1 + 0.2); // 0.30000000000000004

// resolve this problem
// approach 1
// console.log(0.1 * 10 + 0.2 * 10); // 3
// console.log((0.1 * 10 + 0.2 * 10) / 10); // 0.3

// approach 2
// console.log((0.1 + 0.2).toFixed(1)); // "0.3"
// console.log((5).toFixed(2));  //  ”5.00”
// console.log((8.762195).toFixed(4));  //  “8.7622”

// -----------FUNCTION---------

// // function declaration
// function sayHi() {
//   console.log("Hello");
// }
// // function call
// sayHi();

// // parameters declaration x, y, z
// function multiply(x, y, z) {
//   console.log(`Result: ${x * y * z}`);
// }

// // passing arguments
// multiply(2, 3, 5); // "Result: 30"
// multiply(4, 8, 12); // "Result: 384"
// multiply(17, 6, 25); // "Result: 2550"

// При передачі аргументів під час виклику функції необхідно дотримуватись порядку, що відповідає порядку   оголошених параметрів: значення першого аргументу буде присвоєно першому параметру, другого аргументу — другому параметру і так далі.
// Щоразу під час виклику функції параметри будуть оголошуватися заново, і їх значення в окремих викликах функції не впливатимуть один на одний.

// Функція add повинна вміти додавати три числа і виводити результат у консоль. Оголоси для функції add три параметри: a, b і c, які будуть отримувати значення з аргументів, під час її виклику.
// Доповни console.log() таким чином, щоб він логував рядок "Addition result equals <result>", де <result> - це сума переданих чисел.

// function add(a, b, c) {
//   const result = a + b + c;
//   console.log(`Addition result equals ${result}`);
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);
