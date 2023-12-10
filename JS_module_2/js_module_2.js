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

function checkAge(age) {
  if (age >= 18) {
    return "You are an adult";
  }
}
checkAge(19);
// console.log(checkAge)
