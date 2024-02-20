// ----Стандарт JSON

// JSON (JavaScript Object Notation) — сучасний текстовий формат зберігання й передачі структурованих даних у текстовій формі. Саме в цьому форматі дані будуть приходити і відправлятися на сервер, зберігатися в локальному сховищі тощо.

// Звичайний об'єктоподібний синтаксис JSON дуже зручний. Але JSON — це не об'єкт, а його рядкове відображення. Розгляньте приклад JSON файлу.

// {
//   "name": "Josh",
//   "weight": 175,
//   "age": 30,
//   "eyecolor": "brown",
//   "isHappy": true,
//   "cars": ["Chevy", "Honda"],
//   "favoriteBook": {
//     "title": "The Last Kingdom",
//     "author": "Bernard Cornwell",
//     "rating": 8.38
//   }
// }

// Синтаксис схожий на об'єкт, за винятком того, що:

// Ключі — це завжди рядки, обов'язково в подвійних лапках.
//  Значення рядків — також обов'язково в подвійних лапках.
//     Числа можуть бути цілими або десятковими, з десятковою крапкою або без неї, включаючи негативні.
// Числа та булеві значення true і false записуються так само, як у JavaScript.
//  У JSON немає коми після останньої властивості об'єкта.
// Значення властивостей може бути спеціальним значенням null, але не може бути undefined.
//  Функції не можна зберігати у JSON, оскільки JSON передбачений лише для даних, а не для методів обробки даних.

// ----Перетворення у json

// Метод JSON.stringify(value) приймає значення і перетворює його у JSON. Значенням може бути число, буль, null, масив, об'єкт.

// Рядки — це вже валідний JSON, тому в їх перетворенні немає сенсу.
// const dog = {
//   name: "Mango",
//   age: 3,
//   isGoodBoy: true,
// };

// const json = JSON.stringify(dog);
// console.log(json); // '{"name":"Mango","age":3,"isGoodBoy":true}'

// Функції не перетворююьбся у формат json

// ----Парсинг із json
// JASON.parse(value) приймає json і перетворює у валідний js код

// console.log(JSON.parse("5")); // 5
// console.log(JSON.parse("false")); // false
// console.log(JSON.parse("null")); // null

// const json = '{"name: "Mango", "age":3,"isGoodBoy":true}';

// const dog = JSON.parse(json);
// console.log(dog); // {name: "Mango", age: 3, isGoodBoy: true}
// console.log(dog.name); // "Mango"

// ----Обробка помилок

// Якщо методу JSON.parse передати невалідний JSON, він згенерує помилку.

// Рядок із символами — це невалідний JSON, адже він не може бути перетворений у валідне JavaScript значення.

// const data = JSON.parse("Well, this is awkward");
// console.log("❌ You won't see this log");

// Помилка буде і при спробі парсингу невалідного об’єкта, який, наприклад, може прийти з бекенду. У прикладі у властивості username бракує подвійних лапок.

// const data = JSON.parse('{username: "Mango"}'); // Error
// console.log("❌ You won't see this log");

//  конструкція try...catch, яка дозволяє «ловити» й обробляти помилки виконання скрипта.

// try {
//   // Code that may throw a runtime error
// } catch (error) {
//   // Error handling
// }

//     Спочатку виконується код всередині блоку try.
//     Якщо помилки відсутні, блок catch ігнорується й управління передається далі.
//     Якщо в блоці try сталася помилка, його виконання зупиняється та інтерпретатор переходить до блоку catch.
// Використовуючи конструкцію try...catch, можна обробити цей виняток таким чином, щоб скрипт за межами цієї конструкції продовжив працювати, навіть у разі помилки.

// try {
//   const data = JSON.parse("Well, this is awkward");
// } catch (error) {
//   console.log(error.name); // "SyntaxError"
//   console.log(error.message); // Unexpected token W in JSON at position 0
// }

// console.log("✅ This is fine, we handled parsing error in try...catch");

// Змінна error — це об'єкт помилки з інформацією про те, що сталося.

// У цього об'єкта є кілька корисних властивостей:

//     name — тип помилки. Для помилки парсингу — це SyntaxError.
//     message — повідомлення про деталі помилки.
//     stack — стек викликів функцій на момент помилки. Використовується для налагодження.

//----Web Storage

// Вебсховище — це механізм у веббраузерах, який дозволяє вебдодаткам зберігати та отримувати дані на стороні клієнта, тобто на комп'ютері користувача. Щоразу, коли ти змінюєш тему кольорів між світлою і темною, переглядаєш відео, додаєш товар у кошик, відкриваєш або закриваєш сайдбар, популярні вебзастосунки можуть запам'ятовувати стан інтерфейсу і в наступному відвідуванні відновлювати його.

// Вебсховище не зберігає паролі, номери банківських карт та іншу конфіденційну інформацію. Якщо шкідливий скрипт отримає доступ до вебсторінки, він без проблем зможе прочитати ці дані.

// Вебсховище складається з локального сховища та сховища сеансів.

//     Локальне сховище (Local Storage): унікальне для кожного вебдодатку і буде однаковим на кількох вкладках, де вебдодаток відкритий. Дані в локальному сховищі не видаляються, навіть після закриття браузера або вимкнення комп'ютера. Щоб їх видалити, потрібно використовувати JavaScript. Доступ до даних у локальному сховищі можливий з будь-якої вкладки або вікна браузера, пов'язаної з доменом, який створив дані.
//     Сховище сесії (Session Storage): на відміну від локального сховища, дані у сховищі сесії зберігаються лише протягом одної сесії браузера. Якщо користувач закриє вкладку або браузер, дані будуть видалені. Сховище сесії зручне для зберігання тимчасових даних або станів, які не повинні зберігатися довгий час.

// Доступ до локального сховища можна отримати в об’єкті window:

// console.log(window);
// Storage {length: 0}

//----setItem Додавання даних

// Давай додамо пару ключ-значення до локального сховища за допомогою методу setItem(key, value), доступного в об’єкті localStorage:

// localStorage.setItem('ui-theme', 'light');

// Це встановить новий запис у сховищі з ключем "ui-theme" і значенням "light". Якщо ти просто викличеш об’єкт localStorage зараз, то побачиш збережені дані.

// console.log(localStorage); // Storage {ui-theme: "light", length: 1}

// ----додавання складних данних

// const settings = {
//   theme: 'dark',
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };

// localStorage.setItem('settings', JSON.stringify(settings));

// ----getItem отримання данних
// getItem(key);
// localStorage.setItem('ui-theme', 'light');

// const savedTheme = localStorage.getItem('ui-theme');

// console.log(savedTheme);

// Якщо у сховищі відсутній запис з таким ключем, метод повертає null.

// const savedItem = localStorage.getItem("key-that-does-not-exist");
// console.log(savedItem); // null

// const settings = {
//   theme: 'dark',
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };
// localStorage.setItem('settings', JSON.stringify(settings)); //додаємо об'єкт в local storage

// const savedSettings = localStorage.getItem('settings');
// console.log(savedSettings); // A string отримуємо строку з local storage в змінну

// const parsedSettings = JSON.parse(savedSettings);
// console.log(parsedSettings); // Settings object парсимо строку в валідний код

// // ----removeItem

// localStorage.setItem("ui-theme", "dark");
// console.log(localStorage.getItem("ui-theme")); // "dark"

// localStorage.removeItem("ui-theme");
// console.log(localStorage.getItem("ui-theme")); // null

// метод clear()
// повністю очистити сховище, потрібно викликати метод clear().
// !якщо працюєш в команді краще скіпати цей метод
// localStorage.setItem("ui-theme", "light");
// localStorage.setItem("notif-level", "mute");
// console.log(localStorage);
// // Storage {notif-level: 'mute', ui-theme: 'light', length: 2}
// localStorage.clear();
// console.log(localStorage); // Storage {length: 0}

// ----Сховище сесії

// Сховище сесії зберігає дані лише доти, поки відкрита вкладка браузера.

// Це означає, що кожного разу, коли відкривається нова вкладка або нове вікно браузера, створюється нове сховище сесії. Отже, будь-які дані, які зберігаються в сховищі сесії, автоматично видаляються, коли користувач закриває цю вкладку/вікно.
// Набір методів та їхній функціонал ідентичні методам роботи з локальним сховищем.

// Єдиний виняток — звертаємося до них через об'єкт sessionStorage, а не localStorage.
// console.log(window.sessionStorage); // Storage {length: 0}

// const form = document.querySelector('feedback-form');

// form.addEventListener('submit', evt => {
//   evt.preventDefault();
//   console.log(evt.target.evements.message.value);
// });

// const form = document.querySelector('.feedback-form');
// const localStorageKey = 'goit-example-message';

// form.addEventListener('input', evt => {
//   sessionStorage.setItem(localStorageKey, evt.target.value);
// });

// form.addEventListener('submit', evt => {
//   evt.preventDefault();
//   console.log(evt.target.elements.message.value);
//   form.reset();
// });

// console.log(sessionStorage);
// console.log(localStorage);
// Щоразу, коли змінюється значення поля, тобто відбувається подія "input", ми:

//     використовуємо делегування подій
//     ловимо подію на формі
//     використовуємо властивість target для запису поточного значення поля в локальне сховище

// ---- sessionStorageСховище сесії

// Сховище сесії зберігає дані лише доти, поки відкрита вкладка браузера.

// Це означає, що кожного разу, коли відкривається нова вкладка або нове вікно браузера, створюється нове сховище сесії. Отже, будь-які дані, які зберігаються в сховищі сесії, автоматично видаляються, коли користувач закриває цю вкладку/вікно.

// Набір методів та їхній функціонал ідентичні методам роботи з локальним сховищем.

// Єдиний виняток — звертаємося до них через об'єкт sessionStorage, а не localStorage.

// console.log(window.sessionStorage); // Storage {length: 0}

// Методом setItem(key, value) можна записувати як рядки, так і складні типи даних.

// --
// Зробимо так, щоб при перезавантаженні сторінки зберігалося введене повідомлення.

// Для цього використовуємо локальне сховище, щоб зберегти поточне значення текстового поля під час введення.
// const form = document.querySelector('.feedback-form');
// const localStorageKey = 'goit-example-message';

// form.addEventListener('input', evt => {
//   localStorage.setItem(localStorageKey, evt.target.value);
// });

// form.addEventListener('submit', evt => {
//   evt.preventDefault();
//   console.log(evt.target.elements.message.value);
//   localStorage.removeItem(localStorageKey);
//   form.reset();
// });

// ----Інструменти веброзробки

// pass some themes

// ----Типи залежностей

// Уяви торт. Для його приготування шефу, перш за все, потрібні продукти, адже саме вони увійдуть до складу торта. Також будуть потрібні спеціальні інструменти, скажімо міксер, миска для тіста, лопатки тощо. А ще на кухні є столи і печі, холодильники, тобто ті речі, що використовується для приготування будь-якої страви — це загальні інструменти, які є на кухні.

// Так само і з залежностями проєкту: деякі будуть використані у фінальному продукті, інші необхідні тільки на стадії розробки.

// Саме для цього команди npm install і npm uninstall мають два прапорці.

//     --save — вказує, що додається залежність, яка увійде до фінального продукту. Пакет буде встановлений локально, в папку node_modules, і буде доданий запис у поле dependencies в package.json.
//     --save-dev — вказує, що додається залежність розробки, яка не увійде до фінального продукту. Пакет буде встановлений локально, в папку node_modules, і буде доданий запис у поле devDependencies в package.json.

// Якщо не вибирати прапорець, за замовчуванням буде використаний --save.

// Видаляючи пакет, необхідно вказувати правильний прапорець, такий самий, що й для встановлення.
