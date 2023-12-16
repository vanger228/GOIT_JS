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
