// ----this
// Замість імені об'єкта, ми використовуємо зарезервоване ключове слово this.

// Під час виклику функції у this записується посилання на об'єкт, у контексті якого вона була викликана. Таким чином, у тілі функції ми можемо отримати доступ до властивостей і методів цього об'єкта.

// const user = {
//   username: "Victor",
//   showName() {
// 		// Віктор біжить швидко, тому що він (this) намагається зловити поїзд.
//     console.log(this.username);
//   },
// };

// user.showName();

// Метод showName — це функція, яка викликається в контексті об'єкта user. Під час її виклику в this записується посилання на об'єкт user, і ми можемо звертатися до його властивостей і методів.

// Виконай рефакторинг методів об'єкта pizzaPalace, розставивши відсутні this в місцях звернення до властивостей і методів об'єкта.

// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };

// Глобальний контекст

// У визначенні значення this є важливий нюанс. Значення this визначається не на момент оголошення функції (за винятком стрілкових функцій), а на момент її виклику. Іншими словами, this визначається тим, як саме функцію викликали, а не де вона була оголошена.

// function foo() {
//   console.log(this);
// }

// foo(); // window

// У глобальному контексті, якщо функція виконується не в суворому режимі, this посилається на об'єкт window. Об'єкт window надає доступ до браузерних властивостей і функцій та є глобальним контекстом виконання для скриптів у браузері.

// У суворому режимі значення this у глобальному контексті завжди буде undefined.

// 'use strict';

// function foo() {
//   console.log(this);
// }

// foo(); // undefined

const obj = {
  name: 'user name',
  skills: {
    mySkills: 'html',
    someValue: {
      value: 10,
      foo() {
        console.log('foo', this);
        function nickName() {
          console.log(this);
        }
        nickName();
      },
    },
  },
};
obj.skills.someValue.foo();
