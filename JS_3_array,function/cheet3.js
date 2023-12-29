// ---index
// індексація починається з 0
// array lenght з 1
// ---Перевизначення значення елемента
// const planets = ['Earth', 'Mars', 'Venus', 'Uranus'];
// planets[0] = 'Jupiter';
// planets[2] = 'Neptune';
// ---length
// array.length
// індекс останнього елем
// array.length - 1

// ---Приведення типів: масиви
// ---Масив → Рядок
// При перетворенні масиву в рядок усі елементи масиву об'єднуються в один рядок, розділений комами.
// ---масив => boolean = true

// --- Метод join()  array => str
// Метод масиву join(delimiter) дозволяє об'єднати елементи масиву в рядок.
// У результуючому рядку елементи будуть розділені символом або групою символів, зазначених у delimiter.
// const words = ["JavaScript", "is", "amazing"];
// console.log(words.join("")); // 'JavaScriptisamazing'
// console.log(words.join(" ")); // 'JavaScript is amazing'
// console.log(words.join("-")); // 'JavaScript-is-amazing'

// ---Метод split()  str => array
// Метод рядків split(delimiter) виконує зворотну операцію порівняно з методом масивів join(delimiter). Він дозволяє перетворити рядок на масив, розбивши його за вказаним роздільником delimiter.
// const name = "Mango";
// const letters = name.split("");
// console.log(letters); // ["M", "a", "n", "g", "o"]

// ---Метод slice()
// Метод масиву slice(begin, end) повертає новий масив, що містить копію частини вихідного масиву, не змінюючи його. Копія створюється від індексу begin до, але не включаючи індекс end.

// ---Метод concat()
// Метод concat(arr1, arr2, ..., arrN) використовується для об'єднання двох або більше масивів.
// const firstArray = ["Mercury", "Venus"];
// const secondArray = ["Mars", "Jupiter"];
// const result = firstArray.concat(secondArray);
// console.log(result); // ["Mercury", "Venus", "Mars", "Jupiter"];
// Зверни увагу, що вихідні масиви firstArray і secondArray залишаються незмінними після виклику concat().Метод concat() створює і повертає новий масив, що містить усі елементи об'єднаних масивів.

// ---Метод indexOf()
// Метод масиву indexOf(elem) використовується для визначення індексу першого входження елемента у масиві. Він повертає індекс елемента, якщо він знайдений, або -1, якщо елемент не знайдений. Метод indexOf() виконує сувору рівність (===) при порівнянні елементів.
// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const a = oldClients.indexOf("Poly");
// const b = oldClients.indexOf("Max");
// console.log(a, b);

// ---Метод push()
// Метод масиву push() використовується для додавання одного або більше елементів у кінець масиву.
// array.push(element1, element2, ..., elementN);

// ---Ітерація по масиву
// const planets = ["Earth", "Mars", "Venus"];
// for (let i = 0; i < planets.length; i++) {
//   console.log(planets[i]);
// }

// ---Цикл for of
// Цикл for...of — це зручний спосіб перебору масиву. Тіло циклу буде виконуватися на кожній ітерації. Це гарна заміна циклу for, якщо не потрібен доступ до лічильника.
// Синтаксис циклу for...of виглядає так:
// for (const element of array) {
//   // тіло циклу
// }

// ---Псевдомасив arguments
// function sum(a, b) {
//   console.log(arguments);
//   return a + b;
// }
// sum(2, 5);
// У цьому прикладі при виклику функції sum(2, 5) зберуться всі передані аргументи (числа 2 і 5) і запишуться як елементи колекції псевдомасиву arguments.
// Ця колекція схожа на масив, але насправді є псевдомасивом, тобто:
// у неї є деякі властивості масивів, наприклад length
// у неї є можливість звернутися до елемента за індексом
// у неї немає методів для роботи з масивом
// її можна перебирати за допомогою циклів

// ---Array.from()
// для створення масиву з псевдомасиву

// ---Параметри за замовчуванням
// Функції можуть мати параметри зі значеннями за замовчуванням, тобто необов'язкові параметри. Ці значення використовуються в тому випадку, якщо функція викликається без передавання відповідного аргументу для цього параметра. Значенням за замовчуванням може бути будь-який тип даних.
// Ось приклад:
// function greet(username = "Guest") {
//   console.log(`Hello, ${username}!`);
// }
// greet("Jacob"); // "Hello, Jacob!"
// greet();        // "Hello, Guest!"

// ---Функціональний вираз
// const multiply = function (x, y, z) {
//   console.log(x * y * z);
// };
// Різниця в тому, що функціональний вираз (function expression) не можна викликати до місця його створення, тільки після, тому що це буквально оголошення const змінної.
//  ВИРАЗ ВИКОРИСТОВУЄТЬСЯ!
// Коли потрібно присвоїти функцію змінній або передати функцію як аргумент в іншу функцію.

// ---// Шпаргалка по методам масивів:
// split/join -- перетворює рядок на масив і назад.
// push () -- додає елементи до кінця,
// pop() -- видаляє елемент з кінця,
// shift() -- видаляє елемент із початку,
// unshift() - додає елементи на початок.
// splice(index, deleteIndex, ...arr) -- починаючи з індексу index, видаляє deleteIndex елементів і вставляє arr. slice(start, end) -- створює новий масив, копіюючи елементи з позиції start до end (не включаючи end).
// Функція повинна робити лише те, що очевидно мається на увазі її назвою. І це має бути однією дією. Якщо коротко і зрозуміло: Одна функція -- одна дія.
// Шпаргалка з оголошення функцій у JS:
// Функціональний вираз (function expression)
// const greet = function (name) {
//  return `Hello, ${name}`;
// };
// Оголошення функції (function declaration)
// function greet(name) {
//  return `Hello, ${name}!`;
// }
// Для того, щоб щось повернути з функції/методу або умови, можна використовувати оператор return. Також з функції можна повертати відразу будь-який тип даних, наприклад return 'hello' // (повернемо рядок) чи return true // (повернемо буль) чи return [1, 2] // (повернемо масив)
// Паттерн ранний возврат, говорит о том, что если условие внутри нашего if вернет true, то нам сразу же нужно что-то вернуть из тела этого условия, с помощью return.
// Не забувайте, що оператор = це оператор присвоєння, а не порівняння.
// Декілька лайфхаків при роботі з масивами.
// Як швидко очистити масив
// const fruits = ['banana', 'apple', 'orange', 'watermelon', 'apple', 'orange', 'grape', 'apple'];
// fruits.length = 0;
// console.log(fruits); // поверне []
// Як об'єднати більше двох масивів
// const fruits = ['apple', 'banana', 'orange'];
// const meat = ['poultry', 'beef', 'fish'];
// const vegetables = ['potato', 'tomato', 'cucumber'];
// const food = [...fruits, ...meat, ...vegetables];
// console.log(food); // поверне ["apple", "banana", "orange", "poultry", "beef", "fish", "potato", "tomato", "cucumber"]
// Як отримати рандомне значення масиву
// const fruits = [ 'banana', 'apple', 'orange', 'watermelon', 'apple', 'orange', 'grape', 'apple', ];
// const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
// console.log(randomFruit); // поверне рандомний фрукт із масиву
//-----перетворення псевдомасиву в масив
//Array.from(arguments)
