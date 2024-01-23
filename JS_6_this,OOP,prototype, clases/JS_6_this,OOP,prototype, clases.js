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

// const obj = {
//   name: 'user name',
//   skills: {
//     mySkills: 'html',
//     someValue: {
//       value: 10,
//       foo() {
//         console.log('foo', this);
//         function nickName() {
//           console.log(this);
//         }
//         nickName();
//       },
//     },
//   },
// };
// obj.skills.someValue.foo();

// ----Метод call()

// Бувають ситуації, коли функцію потрібно викликати в контексті об'єкта, навіть якщо функція не є методом цього об'єкта. Для цього у JavaScript існують спеціальні методи: call, apply і bind, які дозволяють вказати контекст виклику функції.

// Вивчимо сигнатуру цього методу. Сигнатура — це ім'я методу і його параметри.

// Сигнатура методу call**()** виглядає так:

// foo.call(thisArg, arg1, arg2, ...)

//     thisArg — об'єкт, який ми хочемо встановити як контекст (значення this) для функції
//     arg1, arg2, ... — необов'язкові аргументи, які будуть передані функції

// Метод call викликає функцію foo так, що значення this у функції буде посилатися на об'єкт thisArg, і також передає їй аргументи arg1, arg2 тощо.

// Розглянемо приклад: давай створимо функцію greet, яка вітає різних користувачів готелю, кожен з яких представлений об'єктом з властивостями username і room. Функція приймає один параметр, str — рядок привітання.

// function greet(str) {
//   console.log(`${str}, ${this.username}, your room is ${this.room}!`);
// }

// const mango = {
//   username: "Mango",
// 	room: 27
// };

// const poly = {
//   username: "Poly",
// 	room: 191
// };

// За допомогою методу call ми можемо викликати функцію greet так, щоб значення this вказувало на потрібний об'єкт і використовувало значення його властивостей.

// greet.call(mango, "Welcome"); // "Welcome, Mango, your room is 27!"
// greet.call(poly, "Aloha"); // "Aloha, Poly, your room is 191!"

// Метод apply()

// Метод apply є аналогом методу call. Відмінність у тому, що в методі apply() синтаксис передачі аргументів вимагає масиву, навіть якщо аргументи функції — це окремі значення.

// Сигнатура методу apply**()** виглядає так:

// foo.apply(thisArg, [arg1, arg2, ...])

//     thisArg — об'єкт, який ми хочемо встановити як контекст (значення this) для функції.
//     arg1, arg2, ... — необов'язкові аргументи, які будуть передані функції.

// Метод apply викликає функцію foo таким чином, що значення this у функції буде посилатися на об'єкт obj і передасть елементи масиву як окремі аргументи arg1, arg2 тощо.

// Розгляньмо приклад, де використаємо раніше оголошену нами функцію greet. Цього разу викликаємо її, використовуючи метод apply замість call.

// function greet(str) {
//   console.log(`${str}, ${this.username}, your room is ${this.room}!`);
// }

// const mango = {
//   username: "Mango",
// 	room: 27
// };

// const poly = {
//   username: "Poly",
// 	room: 191
// };

// greet.apply(mango, ["Welcome"]); // "Welcome, Mango, your room is 27!"
// greet.apply(poly, ["Aloha"]); // "Aloha, Poly, your room is 191!"

// Тобто різниця між call і apply полягає лише у формі передачі аргументів. Вибір між call і apply залежить від того, як саме ти хочеш передавати аргументи до функції в конкретній ситуації. У всіх інших аспектах вони працюють ідентично: викликають функцію в контексті зазначеного об'єкта і передають їй аргументи.

// Метод bind() і втрата контексту

// Методи call і apply викликають функцію «на місці», тобто одразу.

// Метод bind створює і повертає нову функцію, яка має заздалегідь встановлений контекст, і ця нова функція може бути викликана пізніше з будь-якими аргументами.

// Сигнатура методу bind() виглядає так:

// const boundFoo = foo.bind(thisArg, arg1, arg2, ...)

//     thisArg — об'єкт, який ми хочемо встановити як контекст (значення this) для функції
//     arg1, arg2, ... — необов'язкові аргументи, які будуть передані функції при її виклику

// Давай спробуємо зберегти посилання на метод об'єкта у змінну і викликати його в глобальному контексті.

// "use strict";

// const customer = {
//   username: "Jacob",
// 	sayHello() {
// 		console.log(`Hello, ${this.username}!`);
//   }
// };

// customer.sayHello(); // "Hello, Jacob!"

// const greet = customer.sayHello;

// greet(); // TypeError: Cannot read properties of undefined (reading 'firstName')

//     Зберегли посилання на метод sayHello у змінну greet
//     При виклику greet() контекст втрачено, функція викликається в глобальному контексті, тому значення this буде undefined

// При спробі звернутися до властивості this.username під час виклику функції greet(), виникає помилка, оскільки undefined — це навіть не об'єкт

// Це можна виправити, прив'язавши контекст за допомогою методу bind.

// "use strict";

// const customer = {
//   username: "Jacob",
// 	sayHello() {
// 		console.log(`Hello, ${this.username}!`);
//   }
// };

// customer.sayHello(); // "Hello, Jacob!"

// const greet = customer.sayHello.bind(customer);

// greet(); // "Hello, Jacob!"

// ----Алгоритм визначення this

// Ключове слово this — це одна з найзаплутаніших концепцій для новачка.

// Новачки часто підставляють this методом наукового тику доти, доки скрипт не спрацює.

// Але все стає значно простішим, коли є простий алгоритм визначення значення this.

// Крок 1

// Це стрілочна функція?

//     Якщо відповідь Так, значення this те саме, що у this у зовнішній області видимості
//     Якщо відповідь Ні, переходь на Крок 2

// Крок 2

// Чи використовуються методи call, apply або bind?

//     Якщо відповідь Так, значення this — це той самий об’єкт, що передали при їх виклику
//     Якщо відповідь Ні, переходь на Крок 3

// Крок 3

// Функція викликається як метод об’єкта object.method?

//     Якщо відповідь Так, значення this — це об’єкт ліворуч від крапки
//     Якщо відповідь Ні, переходь на Крок 4

// Крок 4

// Скрипт виконується в суворому режимі?

//     Якщо відповідь Так, значення this — undefined
//     Якщо відповідь Ні, значення this — window

// ----Prototype

// механізму прототипного успадкування, який дає змогу організувати об'єкти в ланцюжки таким чином, щоб здійснювався автоматичний пошук властивості в іншому об'єкті, якщо її не знайдено в поточному.

// Метод Object.create(obj) створює і повертає новий об'єкт, зв'язуючи його з об'єктом obj. Розгляньмо приклад:

// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog); // { name: "Mango", [[Prototype]]: animal }

// Об'єкт, на який вказує посилання у властивості [[Prototype]], називається прототипом. У нашому прикладі об'єкт animal — це прототип для об'єкта dog.

// console.log(dog.name); // "Mango"
// console.log(dog.legs); // 4

// Звернення dog.name працює очевидним чином: повертає властивість name об'єкта dog. Звертаючись до dog.legs, інтерпретатор шукає властивість legs в об'єкті dog, не знаходить і продовжує пошук в об'єкті за посиланням з [[Prototype]], тобто в цьому випадку в об'єкті animal — його прототипі.

// Отже, прототип — це резервне сховище властивостей і методів об'єкта, яке автоматично використовується під час їх пошуку.

// Методи Object.keys(obj) і Object.values(obj) повертають масив тільки власних ключів або значень тільки власних властивостей об'єкта obj, без необхідності додаткових перевірок. Через це на практиці використовують саме їх із циклом for...of, замість for...in і hasOwnProperty.

// Давайте реалізуємо це в коді. Ланцюжок прототипів будується з кінця, тобто справа наліво.

// const objC = { c: "objC prop" };

// const objB = Object.create(objC);
// objB.b = "objB prop";

// const objA = Object.create(objB);
// objA.a = "objA prop";

// console.log(objA); // { a: "objA prop", [[Prototype]]: objB }
// console.log(objB); // { b: "objB prop", [[Prototype]]: objC }
// console.log(objC); // { c: "objC prop", [[Prototype]]: Object }

// Оскільки об’єкти objA, objB і objC пов'язані в ланцюжок прототипів, об'єкт objA може отримати доступ до властивостей objB і objC, а об'єкт objB — до властивостей objC.

// console.log(objA.hasOwnProperty("a")); // true
// console.log(objA.a); // "objA prop"

// console.log(objA.hasOwnProperty("b")); // false
// console.log(objA.b); // "objB prop"

// console.log(objA.hasOwnProperty("c")); // false
// console.log(objA.c); // "objC prop"

// console.log(objA.hasOwnProperty("x")); // false
// console.log(objA.x); // undefined

// Пошук властивостей відбувається до першого збігу. Інтерпретатор шукає властивість за ім'ям в об'єкті:

//     Якщо інтерпретатор не знаходить власну властивість, то звертається до властивості [[Prototype]], тобто переходить за посиланням до об'єкта-прототипу, а потім — до прототипу прототипу за ланцюжком.
//     Якщо інтерпретатор доходить до кінця ланцюжка і не знаходить властивості з таким ім'ям, то повертається undefined.

// ---OOP
// ---clases

// Оголошення класу

// Синтаксис літерала об'єкта дозволяє створити один об'єкт. Проте часто є потреба створити багато однотипних об'єктів з однаковим набором властивостей, але різними значеннями й методами для взаємодії з ними. Все це потрібно робити динамічно, під час виконання програми. З цією метою використовують класи.

// Оголошення класу має такий синтаксис:

//     ключове слово class
//     ім’я класу (у прикладі: User)
//     тіло класу у фігурних дужках

// class User {
//   // Тіло класу
// }

// Класи прийнято називати з великої літери, а в назві відображати тип об'єкта (іменника), що створюється.

// А як створити з класу екземпляр?

// Після того як клас було оголошено, можна створити його екземпляр за допомогою спеціального оператора new, поставивши його перед викликом класу. Результатом виклику new User() буде екземпляр класу User. Він буде містити дані і мати поведінку, що описані у класі.

// class User {
//   // Тіло класу
// }

// const mango = new User();
// console.log(mango); // {}

// const poly = new User();
// console.log(poly); // {}

// ----Конструктор класу

// Виклик класу з оператором new призводить до створення нового об'єкта й автоматичного виклику методу constructor.

// class User {
//   constructor() {
// 		console.log("constructor call")
//   }
// }

// const mango = new User(); // "constructor call"
// console.log(mango); // {}

// Аргументи, які передаються при виклику new User(), стають значеннями параметрів для методу constructor.

// class User {
//   constructor(name, email) {
// 		console.log(name, email);
//   }
// }

// const mango = new User("Mango", "mango@mail.com"); // "Mango mango@mail.com"
// console.log(mango); // {}

// Зверни увагу, що метод constructor викликається в контексті створюваного екземпляра.

// class User {
//   constructor(name, email) {
//     // Ініціалізація властивостей екземпляра
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User("Mango", "mango@mail.com");
// console.log(mango); // { name: 'Mango', email: 'mango@mail.com' }

// const poly = new User("Poly", "poly@mail.com");
// console.log(poly); // { name: 'Poly', email: 'poly@mail.com' }

// Таким чином, this усередині конструктора посилається на новостворений об'єкт.

// Це дозволяє надавати кожному об'єкту властивості з однаковими іменами, але різними значеннями.

// Властивості name та email називаються публічними властивостями, оскільки вони є власними властивостями об'єкта-екземпляра.

// class Car {
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     TouchList.price = price;
//   }
// }
// new Car('Audi', 'Q3', 36000);

// Методи класу

// Для роботи з властивостями майбутнього екземпляра використовуються методи класу.

// Методи класу — це функції, які будуть доступні екземпляру в його прототипі. Вони оголошуються в довільному порядку після конструктора. На відміну від синтаксису методів об'єкта (вони розділяються комою), методи класу не розділені жодними спеціальними символами.

// class User {
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }

//   getEmail() {
//     return this.email;
//   }

//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// Після створення екземпляра можна використовувати оголошені методи класу, які будуть звертатися до властивостей об'єкта, що їх викликав.

// const mango = new User({
// 	name: "Mango",
// 	email: "mango@mail.com"
// });

// console.log(mango.getEmail()); // "mango@mail.com"

// mango.changeEmail("new@mail.com");

// console.log(mango.getEmail()); // "new@mail.com"

// прототип екземпляру

// class User {
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }

//   getEmail() {
//     return this.email;
//   }

//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// const mango = new User({
//   name: 'Mango',
//   email: 'mango@mail.com',
// });

// console.log(mango.getEmail()); // “mango@mail.com”

// ----Приватні методи

// Ти вже знаєш, як працюють публічні методи. Подивимось на це на прикладі класу User з приватною властивістю #email та публічною властивістю name.

// class User {
//   name;
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

// // Публічний метод для отримання електронної пошти
//   getEmail() {
//     return this.#email;
//   }

// // Публічний метод для зміни електронної пошти
//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });

// console.log(mango.getEmail()); // "mango@mail.com"
// mango.changeEmail("mango@supermail.com");
// console.log(mango.getEmail()); // "mango@supermail.com"

// ----приватні методи

// class User {
//   name;
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   // Публічний метод для отримання електронної пошти
//   getEmail() {
//     return this.#email;
//   }

//   // Публічний метод для зміни електронної пошти
//   changeEmail(newEmail) {
//     if (this.#validateEmail(newEmail)) {
//       this.#email = newEmail;
//     } else {
//       console.log('Invalid email format');
//     }
//   }

//   // Приватний метод для валідації електронної пошти
//   #validateEmail(email) {
//     return email.includes('@');
//   }
// }

// const mango = new User({
//   name: 'Mango',
//   email: 'mango@mail.com',
// });

// // Спробуємо змінити електронну пошту
// mango.changeEmail('newmail.com'); // "Invalid email format"
// mango.changeEmail('new@mail.com');
// console.log(mango.getEmail()); // "new@mail.com"

// // Прямий виклик приватного методу ззовні призведе до помилки
// mango.#validateEmail('test'); // Помилка

// У цьому прикладі приватний метод #validateEmail забезпечує додаткову логіку для валідації електронної пошти.

// Цей метод не доступний ззовні класу, тому користувачі (або інші розробники) не можуть його викликати напряму. Вони можуть лише використовувати публічний метод changeEmail, який у свою чергу використовує приватний метод для валідації.

// Таким чином, ми інкапсулюємо внутрішню логіку й забезпечуємо безпеку та стабільність роботи класу.

// ----Геттери і сеттери

// Виконай рефакторинг класу Car. Додатково до приватної властивості #brand зроби приватними властивості model і price. Стандартизуй публічний інтерфейс класу, замінивши вже оголошені методи на геттери та сеттери brand, model і price, для взаємодії з приватними властивостями.

// class User {
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   // Геттер email
//   get email() {
//     return this.#email;
//   }

//   // Сеттер email
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class Car {
//   #brand;
//   #model;
//   #price;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// }

// Статичні властивості

// Крім публічних і приватних властивостей майбутнього екземпляра, у класі можна оголосити його власні властивості. Властивості, що доступні тільки класові, але не його екземплярам — це статичні властивості. Вони корисні для зберігання інформації, що стосується класу.

// Статичні властивості оголошуються в тілі класу. Перед ім'ям властивості додається ключове слово static. Статичні властивості можна використовувати як у методах класу, так і поза класом.

// class MyClass {
// 	static myProp = "value";
// }

// console.log(MyClass.myProp); // "value"

// У екземпляра немає доступу до статичних властивостей класу.

// class MyClass {
// 	static myProp = "value";
// }

// const inst = new MyClass();
// console.log(inst.myProp); // undefined

// Додамо класу користувача приватну властивість role — його роль, що визначає набір прав, наприклад: адміністратор, редактор, звичайний користувач тощо. Можливі ролі користувачів будемо зберігати як статичну властивість roles — об'єкт із властивостями.

// class User {
//   static roles = {
//     admin: "admin",
//     editor: "editor",
// 		basic: "basic"
//   };

//   #email;
//   #role;

//   constructor({ email, role = User.roles.basic }) {
//     this.#email = email;
//     this.#role = role;
//   }

//   get role() {
//     return this.#role;
//   }

//   set role(newRole) {
//     this.#role = newRole;
//   }
// }

// const mango = new User({
//   email: "mango@mail.com",
//   role: User.roles.admin,
// });

// console.log(mango.role); // "admin"
// mango.role = User.roles.editor;
// console.log(mango.role); // "editor"

// Виконай рефакторинг класу Car. Додай публічну статичну властивість maxPrice зі значенням число 50000 - максимально допустима ціна автомобіля.

// Додай сеттеру price перевірку значення параметра newPrice, що передається. Якщо воно більше за maxPrice, сеттер нічого не робить, а якщо менше або дорівнює, то перезаписує ціну автомобіля.

// Під оголошенням класу ми додали ініціалізації екземплярів і виклики методів, щоб показати, як будуть використовуватися геттери і сеттери price.

// class Car {
//   static maxPrice = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.maxPrice) {
//       this.#price = newPrice;
//     }
//   }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// ----Статичні методи

// У класі можна оголосити не тільки методи майбутнього екземпляра, а й статичні методи. Статичні методи — це методи, доступні тільки класу. Вони можуть бути публічні та приватні.

// Синтаксис оголошення статичних методів майже аналогічний статичним властивостям. Єдина відмінність — значенням буде метод.

// 	class MyClass {
// 		static myMethod() {
// 			console.log("A static method");
// 	}
// }

// MyClass.myMethod(); // "A static method"

// Додамо у клас User:

//     статичну властивість takenEmails для зберігання зайнятих пошт користувачів
//     статичний метод isEmailTaken, який перевіряє, чи доступна пошта

// Під час ініціалізації екземпляра в конструкторі класу будемо додавати пошту в список зайнятих.

// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor({ email }) {
//     this.#email = email;
//     User.#takenEmails.push(email);
//   }
// }

// const mango = new User({ email: "mango@mail.com" });

// console.log(User.isEmailTaken("poly@mail.com")); // false
// console.log(User.isEmailTaken("mango@mail.com")); // true

// Особливість статичних методів
// Під час їх виклику ключове слово this посилається на сам клас. Це означає, що статичний метод може отримати доступ до статичних властивостей класу, але не до властивостей екземпляра. Це логічно, адже статичні методи викликає сам клас, а не його екземпляри.

// Додай класу Car публічний статичний метод checkPrice(price), що приймає ціну автомобіля. Метод повинен порівняти значення параметра price і приватної статичної властивості maxPrice.

//     Якщо ціна автомобіля перевищує максимальну, метод повинен повернути рядок "Error! Price exceeds the maximum".
//     В іншому випадку метод повинен повернути рядок "Success! Price is within acceptable limits".

// Під оголошенням класу ми додали ініціалізацію екземпляра і виклики методів, щоб показати, як буде використовуватися метод checkPrice(price).

// class Car {
//   static #maxPrice = 50000;
//   static checkPrice(price) {
//     return price > Car.#maxPrice
//       ? 'Error! Price exceeds the maximum'
//       : 'Success! Price is within acceptable limits';
//   }
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// Наслідування класів

// Ключове слово extends дозволяє реалізувати наслідування класів, коли один клас (дочірній, похідний) наслідує властивості й методи іншого класу (батьківського).

//     створити загальний клас User, який буде зберігати набір загальних властивостей і методів
//     після чого створити класи для кожного типу користувача, які наслідують цей набір від класу User

// За потреби змінити щось спільне, достатньо буде змінити тільки код класу User.

// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
// 	// Тіло класу ContentEditor
// }

// const editor = new ContentEditor("mango@mail.com");
// console.log(editor); // { #email: "mango@mail.com" }
// console.log(editor.email); // "mango@mail.com"

// Клас ContentEditor наслідує від класу User його конструктор, геттер і сеттер email, а також приватну властивість #email.

// У застосунку потрібен адміністратор з можливістю додавати пошти користувачів у чорний список.

//     Оголоси клас Admin, який наслідує від класу User
//     Додай класу Admin публічну статичну властивість role (рівень доступу), значення якої — це об'єкт {BASIC: "basic", SUPERUSER: "superuser"}

// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static role = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };
// }

// Конструктор дочірнього класу

// У конструкторі дочірнього класу необхідно викликати спеціальну функцію super(args) — це псевдонім конструктора батьківського класу.

// В іншому випадку при спробі звернутися до this у конструкторі дочірнього класу виникне помилка.

// Під час виклику конструктора батьківського класу передаємо необхідні йому аргументи для ініціалізації властивостей.

// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     super(email); // Виклик конструктора батьківського класу User
//     this.posts = posts;
//   }
// }

// const editor = new ContentEditor({
// 	email: "mango@mail.com",
// 	posts: []
// });
// console.log(editor); // { #email: "mango@mail.com", p

// Додай класу Admin метод constructor, який приймає один параметр - об'єкт налаштувань з двома властивостями email і access. Додай класу Admin публічну властивість access, значення якої буде передаватися під час виклику конструктора.

// Щоб показати, як буде використовуватися клас Admin, ми додали ініціалізацію екземпляра під оголошенням класу.

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get userEmail() {
//     return this.email;
//   }

//   set userEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static role = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"

// ----Методи дочірнього класу

// Дочірній клас може використовувати методи та властивості батьківського класу. Крім цього, у дочірньому класі можна оголошувати методи, які будуть доступні тільки його екземплярам.

// Уявімо, що вище є оголошення класу User
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get userEmail() {
//     return this.email;
//   }

//   set userEmail(newEmail) {
//     this.email = newEmail;
//   }
// }
// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     super(email);
//     this.posts = posts;
//   }

//   addPost(post) {
//     this.posts.push(post);
//   }
// }

// const editor = new ContentEditor({
//   email: 'mango@mail.com',
//   posts: [],
// });

// console.log(editor); // { #email: "mango@mail.com", posts: [], addPost: f }

// editor.addPost('post-1');
// editor.addPost('post-2');
// console.log(editor.posts); // ['post-1', 'post-2']

// У прикладі бачимо, що ContentEditor успадковує клас User.

//     User — це базовий клас, який має приватну властивість #email.
//     ContentEditor розширює клас User і має власну властивість posts. Клас ContentEditor також має метод addPost, який дозволяє додавати нові повідомлення до posts.

// Метод addPost — це метод дочірнього класу ContentEditor . Він буде доступний тільки екземплярам ContentEditor.

// Додай класу Admin наступні властивості і методи.

//     Публічну властивість blacklistedEmails для зберігання чорного списку поштових адрес користувачів. Значення за замовчуванням — це порожній масив.
//     Публічний метод blacklist(email) для додавання пошти у чорний список. Метод повинен додавати значення параметра email в масив, що зберігається у властивості blacklistedEmails.
//     Публічний метод isBlacklisted(email) для перевірки пошти у чорному списку. Метод повинен перевіряти наявність значення параметра email в масиві, що зберігається у властивості blacklistedEmails, і повертати true або false.

// Після оголошення класу ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get userEmail() {
//     return this.email;
//   }

//   set userEmail(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   static role = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };
//   blacklistedEmails = [];

//   constructor({ email, access }) {
//     super(email);
//     this.access = access;
//   }
//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }
//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email);
//   }
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"

// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted('mango@mail.com')); // false
// console.log(mango.isBlacklisted('poly@mail.com')); // true

// class User {
//   constructor(user) {
//     console.log(`constructor ${user}`);
//   }
// }

// const mir = new User('mir');

class User {
  static normalGender = 'male';
  static isNormalGender(user) {
    return user.#gender === this.normalGender;
  }
  name;
  age;
  #gender;
  #posts = [];
  constructor({ name, age, gender }) {
    this.name = name;
    this.age = age;
    this.#gender = gender;
  }
  getAge() {
    return this.age;
  }
  set gender(newGender) {
    this.#gender = newGender;
  }
  get gender() {
    return this.#gender;
  }
  get newPosts() {
    return this.#posts;
  }
  set newPosts(post) {
    this.#posts.push(...post);
  }
  // addPosts(newPost) {
  //   //використовую звичайнмй метод а не set, щоб була змога додати відразу масив постів
  //   this.#posts.push(newPost);
  // }
}

const mir = new User({ name: 'mir', age: '21', gender: 'male' });
const anton = new User({ name: 'anton', age: '22', gender: 'male' });
const alex = new User({ name: 'alex', age: '23', gender: 'male' });

alex.gender = 'trans';

alex.newPosts = ['1post', '2post', '3post'];
// alex.addPosts = ['1post', '2post', '3post'];
console.log(alex.newPosts);
console.log(alex);
console.log(mir);
console.log(anton);
// console.log(alex, alex.gender);
// console.log(User.isNormalGender(mir));
//jet brains