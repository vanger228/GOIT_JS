// Масив — це впорядкована структура даних, яка використовується для зберігання колекції елементів. Масиви можуть містити елементи різних типів даних, таких як числа, рядки, булеві значення тощо.

// Для створення масиву в JavaScript використовується літерал масиву: квадратні дужки []. Усередині дужок перераховуються елементи масиву, розділені комами. Ось приклад створення масиву:

// const planets = ['Earth', 'Mars', 'Venus']; // масив рядків
// const numbers = [1, 2, 3, 4, 5]; // масив чисел
// const mixed = ['apple', 10, true]; // масив з елементами різних типів

// ---------index
// індексація починається з 0
// array lenght з 1

// arrayName[index];
// const planets = ["Earth", "Mars", "Venus"];
// console.log(planets[0]); // 'Earth'
// console.log(planets[2]); // 'Venus'
// Результат звернення до елемента масиву можна зберегти у змінну і використовувати його надалі.

// const planets = ['Earth', 'Mars', 'Venus'];
// const firstElement = planets[0];
// console.log(firstElement); // 'Earth'

// const fruits = ["apple", "plum", "pear", "orange"];
// let firstElement = fruits[0];
// let secondElement = fruits[1];
// let lastElement  = fruits[3];

// ---------Перевизначення значення елемента
// Елементи масиву можна змінювати, звернувшись до них за індексом і присвоївши нове значення. Цей процес називається "перевизначенням" значення елемента.
// Ось приклад, як перевизначити елементи масиву:
// const planets = ['Earth', 'Mars', 'Venus', 'Uranus'];
// planets[0] = 'Jupiter';
// planets[2] = 'Neptune';
// console.log(planets); // ['Jupiter', 'Mars', 'Neptune', 'Uranus']
// ------length
// const planets = ["Earth", "Mars", "Venus"];

// if (planets.length >= 3) {
//   console.log("3 or more elements");
// } else {
//   console.log("3 or less elements");
// }

// Індекс останнього елемента
// Щоб знайти значення останнього елемента масиву, нам потрібно знати його індекс за допомогою формули довжина_масиву -1.

// const planets = ["Earth", "Mars", "Venus"];
// const lastElementIndex = planets.length - 1;
// console.log(planets[lastElementIndex]); // "Venus"

// Функція getLastElementMeta(array) приймає один параметр array - масив довільних значень. Доповни код функції таким чином, щоб вона повертала новий масив з двох елементів:

// перший елемент - це індекс останнього елементу у масиві array
// другий елемент - це значення останнього елементу у масиві array

// function getLastElementMeta(array) {
//   const lastElementIndex = array.length - 1;
//   //   const lastElementArray = [lastElementIndex, array[lastElementIndex]];
//   //   return lastElementArray; //скорочуємо запис
//   return [lastElementIndex, array[lastElementIndex]]; //скорочуємо запис
// }
// console.log(getLastElementMeta(["apple", "peach", "pear", "banana"]));

// Функція getExtremeElements(array) приймає один параметр array - масив елементів довільної довжини. Доповни код функції таким чином, щоб вона повертала масив з двох елементів - першого і останнього елементів параметра array.

// function getExtremeElements(array) {
//   const lastElementArray = array[array.length - 1];
//   const firstElementArray = array[0];
//   return [firstElementArray, lastElementArray];
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));

// Масиви (складний тип) присвоюються за посиланням, тобто змінна просто отримує посилання (покажчик у пам'яті) на вже існуючий масив.
// const a = ["Mango", "Poly"];
// const b = a;
// console.log(a); // ["Mango", "Poly"]
// console.log(b); // ["Mango", "Poly"]
// Оскільки a це масив, у b записується посилання на вже наявний у пам'яті масив. Тепер a і b вказують на один і той самий масив.

// const a = ["Mango", "Poly"];
// const b = a;
// console.log(a); // ["Mango", "Poly"]
// console.log(b); // ["Mango", "Poly"]

// a[1] = "Jacob";
// console.log(a); // ["Mango", "Jacob"]
// console.log(b); // ["Mango", "Jacob"]

// Два масиви ніколи не дорівнюють один одному, навіть якщо вони порожні або в них однакові елементи.
// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3];
// console.log(arr1 === arr2); // false
// console.log([] === []); // false

// ---------Приведення типів: масиви

// Явне і не явне приведення типів масивів здійснюється за необхідності виконати операції або порівняння, які вимагають сумісності типів даних.

// Масив → Рядок

// При перетворенні масиву в рядок усі елементи масиву об'єднуються в один рядок, розділений комами.

// const array = [1, true, "Poly"];
// console.log(String(array));// "1,true,Poly"
// console.log(array + "5"); // "1,true,Poly5"

// ------Масив → Число

// При перетворенні масиву в число алгоритм складається з двох кроків:

// спочатку масив приводиться до рядка,
// а потім цей рядок приводиться до числового значення.

// Наприклад, порожній масив приводиться до порожнього рядка, який приводиться до числа 0.

// console.log(Number([])); // 0
// console.log(Number([1])); // 1
// console.log(Number([1, 2, 3])); // NaN

// -------boolean

// При перетворенні масиву в логічне значення будь-який масив, навіть порожній, перетворюється на true.

// Метод join()  array => str

// Метод масиву join(delimiter) дозволяє об'єднати елементи масиву в рядок.

// У результуючому рядку елементи будуть розділені символом або групою символів, зазначених у delimiter.

// Приклади використання методу join():

// const words = ["JavaScript", "is", "amazing"];
// console.log(words.join("")); // 'JavaScriptisamazing'
// console.log(words.join(" ")); // 'JavaScript is amazing'
// console.log(words.join("-")); // 'JavaScript-is-amazing'

// Функція getLength(array) очікує один параметр array - масив довільних значень. Доповни код функції так, щоб вона перетворювала масив у рядок, без роздільників, і повертала кількість символів в отриманому рядку.

// function getLength(array) {
//   const arrayStr = array.join("");
//   return arrayStr.length;
// }

// console.log(getLength(["Mango", "hurries", "to", "the", "train"]));

// -----Метод split()  str => array

// Метод рядків split(delimiter) виконує зворотну операцію порівняно з методом масивів join(delimiter). Він дозволяє перетворити рядок на масив, розбивши його за вказаним роздільником delimiter.

// const name = "Mango";
// const letters = name.split("");
// console.log(letters); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript essentials";
// const words = message.split(" ");
// console.log(words); // ["JavaScript", "essentials"]

// const slug = "amazing-french-recipes";
// const slugParts = slug.split("-");
// console.log(slugParts); // ["amazing", "french", "recipes"]

// Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування, залежно від кількості слів і ціни за слово.

// Оголошена функція calculateEngravingPrice(message, pricePerWord). Ця функція приймає першим параметром рядок, що складається зі слів, розділених лише пробілами (параметр message) та другим параметром - число, що містить ціну гравірування за одне слово (параметр pricePerWord).

// Доповни тіло функції так, щоб вона повертала загальну вартість гравірування усіх слів в рядку.

// function calculateEngravingPrice(message, pricePerWord) {
//   const wordsAmount = message.split(" ").length;
//   const totalPrice = wordsAmount * pricePerWord;
//   return totalPrice;
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));

// ----Метод slice()

// Метод масиву slice(begin, end) повертає новий масив, що містить копію частини вихідного масиву, не змінюючи його. Копія створюється від індексу begin до, але не включаючи індекс end.
// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
// console.log(planets.slice(0, 2)); // ['Earth', 'Mars']
// console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
// console.log(planets.slice(1, 3)); // ['Mars', 'Venus']

// Якщо значення begin негативне, а end не вказано, будуть скопійовані останні begin елементів (тобто стільки елементів з кінця, скільки вказано в параметрі begin):

// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
// console.log(planets.slice(-2)); // ["Jupiter", "Saturn"]

// Доповни код таким чином, щоб змінні містили часткові копії вихідного масиву fruits.

// firstTwoEls - масив із перших двох елементів
// nonExtremeEls - масив з усіх елементів, крім першого та останнього
// lastThreeEls - масив із трьох останніх елементів

// const fruits = ["apple", "plum", "pear", "orange", "banana"];
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, -1);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// if (false) {
//   console.log("1if");
// } else if (false) {
//   console.log("2if");
// } else if (false) {
//   console.log("3if");
// } else {
//   console.log("else");
// }

// Метод concat()

// Метод concat(arr1, arr2, ..., arrN) використовується для об'єднання двох або більше масивів.
// const firstArray = ["Mercury", "Venus"];
// const secondArray = ["Mars", "Jupiter"];
// const result = firstArray.concat(secondArray);

// console.log(result); // ["Mercury", "Venus", "Mars", "Jupiter"];
// Зверни увагу, що вихідні масиви firstArray і secondArray залишаються незмінними після виклику concat().Метод concat() створює і повертає новий масив, що містить усі елементи об'єднаних масивів.

// так поєднуємо 3 масиви
// const firstArray = ["Mercury", "Venus"];
// const secondArray = ["Mars", "Jupiter"];
// const thirdArray = ["Saturn", "Neptune"];

// console.log(firstArray.concat(secondArray, thirdArray));
// // ['Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Neptune'];

// console.log(firstArray.concat(thirdArray, secondArray));
// // ['Mercury', 'Venus', 'Saturn', 'Neptune', 'Mars', 'Jupiter', ];

// Оголоси змінну allClients та доповни код таким чином, щоб її значенням було посилання на масив, що складається з усіх елементів масивів oldClients і newClients.Спочатку мають іти елементи з масива oldClients, а потім з newClients.

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];
// const allClients = oldClients.concat(newClients);
// console.log(allClients);

// Метод indexOf()

// Метод масиву indexOf(elem) використовується для визначення індексу першого входження елемента elem у масиві. Він повертає індекс елемента, якщо він знайдений, або -1, якщо елемент не знайдений. Метод indexOf() виконує сувору рівність (===) при порівнянні елементів.

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const a = oldClients.indexOf("Poly");
// const b = oldClients.indexOf("Max");
// console.log(a, b);

// Функція getSlice(array, value) приймає два параметра:

// array - масив довільних елементів
// value - значення елемента масиву для пошуку
// Доповни код функції getSlice(array, value) так, щоб вона виконувала пошук значення value у масиві array і повертала:

// порожній масив, якщо в array немає елемента зі значенням value
// підмасив, що починається з початку array і до елемента зі значенням value включно, якщо такий елемент є в array

// function getSlice(array, value) {
//   const valueIndex = array.indexOf(value) + 1;
//   return valueIndex === 0 ? [] : (newArray = array.slice(0, valueIndex));
// }
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax"));

// ------------Метод push()

// Метод масиву push() використовується для додавання одного або більше елементів у кінець масиву.
// array.push(element1, element2, ..., elementN);
// array — це вихідний масив, до якого потрібно додати елементи
// element1, element2, ..., elementN — елементи, які необхідно додати в кінець масиву

// За допомогою циклу ми можемо виконувати повторювані операції і використовувати метод push для додавання нових елементів у масив на кожній ітерації.Це дуже корисно, коли нам потрібно створити масив з елементами, які можна динамічно додавати.

// const tags = [];
// for(let i = 0; i < 3; i += 1) {
// 	tags.push(`tag-${i}`);
// }
// console.log(tags); // ["tag-0", "tag-1", "tag-2"]

// Код прикладу створює порожній масив tags і за допомогою циклу for додає рядки виду "tag-0", "tag-1", "tag-2" до масиву. Кожен рядок формується за допомогою шаблонного рядка, де значення i в циклі використовується для створення унікального тега на кожній ітерації. У результаті ми отримуємо масив tags, що містить усі додані значення.

// Функція createArrayOfNumbers(min, max) приймає два параметра:

// min - ціле число, з якого починаються обчислення
// max - ціле число, до якого включно триватимуть обчислення
// Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max включно.

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   for (let i = min; i < max + 1; i += 1) {
//     numbers.push(i);
//   }
//   return numbers;
// }
// console.log(createArrayOfNumbers(10, 21));

// =============Ітерація по масиву======

// const planets = ["Earth", "Mars", "Venus"];

// for (let i = 0; i < planets.length; i++) {
//   console.log(planets[i]);
// }

// Початкове значення лічильника i встановлюється як 0 і цикл продовжується, поки i менше за довжину масиву planets.length
// На кожній ітерації циклу використовується planets[i] для доступу до елементів масиву за їх індексом i
// Значення лічильника i з кожною ітерацією збільшується на 1 (вираз i += 1)
// Умова i < planets.length буде повертати true для значень лічильника 0, 1 і 2. Коли i досягне значення 3, умова стане false і цикл зупиниться

// Функція calculateTotalPrice(order) приймає один параметр order - масив чисел. Доповни функцію так, щоб вона повертала загальну суму елементів з масиву order.

function calculateTotalPrice(order) {
  const total = 0;
  for (i = 0; i < order.length; i++) {
    totalSum = total + order[i];
  }
  console.log(totalSum);
}
console.log(calculateTotalPrice([12, 85, 37, 4]));
