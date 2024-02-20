// const date = new Date();

// console.log(date);

// ----promise

// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve('Success! Value passed to resolve function');
//     } else {
//       reject('Error! Error passed to reject function');
//     }
//   }, 2000);
// });

// console.log(promise); // Об'єкт промісу

// Метод then()

// Код, якому потрібно зробити щось асинхронно, створює проміс і повертає його.

// Зовнішній код, отримавши проміс, додає до нього обробники. Після завершення процесу асинхронний код переводить проміс у стан fulfilled або rejected, і автоматично викликаються методи промісів (обробники) у зовнішньому коді.

// Метод проміса then() приймає два аргументи — дві callback функції, які будуть викликані, коли проміс змінить свій стан.

// Результат промісу — це значення або помилка, яку функції отримають як аргументи.

// const isSuccess = true;

// // Create promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve('Success! Value passed to resolve function');
//     } else {
//       reject('Error! Error passed to reject function');
//     }
//   }, 2000);
// });

// // Registering promise callbacks
// promise.then(
//   value => {
//     console.log(value); // "Success! Value passed to resolve function"
//   },
//   error => {
//     console.log(error); // "Error! Error passed to reject function"
//   }
// );

const isSuccess = true;

// Create promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve('Success! Value passed to resolve function');
    } else {
      reject('Error! Error passed to reject function');
    }
  }, 2000);
});

// Registering promise callbacks
promise
  .then(value => console.log(value)) // "Success! Value passed to resolve function"
  .catch(error => console.log(error)) // "Error! Error passed to reject function"
  .finally(() => console.log('Promise settled')); // "Promise settled"
console.log(promise);
