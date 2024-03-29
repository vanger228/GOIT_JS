//---- Спливання подій

// Зараз ми зосередимося на фазі спливанні події, адже часто розробник працює саме зі спливанням.

// Під час настання події обробники спочатку спрацьовують на найбільш вкладеному елементі. Потім — на його батьківському елементі, потім — вище і так далі, вгору по ланцюжку вкладеності. Цей процес називається спливання (event bubbling), тому що події «спливають» від внутрішнього елемента вгору через усіх предків до window, подібно до спливання бульбашки повітря у воді.

// Розглянемо приклад: є три вкладені теги <div> з обробниками кліка на кожному з них.

// Спливання гарантує, що клік по #descendant викличе обробник кліка в такому порядку:

//     спочатку на самому #descendant,
//     потім на елементі #child,
//     далі на елементі #parent
//     і так далі, вгору по ланцюжку предків до window.

// Отже, якщо в прикладі клікнути на #descendant, то послідовно виведуться сповіщення через console.log для descendant → child → parent.

// ----Цільовий елемент

// Незалежно від місця, де ми спіймали слухачем подію під час її спливання, завжди можна дізнатися, де саме вона відбулася.

// Елемент, на якому відбулася подія, називається цільовим, або вихідним. Це завжди найглибший елемент, з якого починається спливання. Він доступний як event.target.

//     event.target — це посилання на вихідний елемент, на якому відбулася подія, у процесі спливання вона — незмінна.
//     event.currentTarget — це посилання на поточний елемент, до якого прив’язаний поточний обробник події, і до якого в результаті спливання дійшла прослуховувана подія.

// Якщо слухач події зареєстрований на найвищому елементі, то цей обробник зможе "перехопити" всі кліки, які відбуваються на його дочірніх елементах, завдяки механізму спливання подій. У прикладі нижче це працює таким чином: обробник зареєстрований на елементі "Parent". Кліки на "Descendant" або "Child" будуть спливати до "Parent", де їх і буде оброблено цим обробником. Тому важливо розуміти різницю між елементом, де подія фактично відбулася (event.target), та елементом, до якого подія спливла, і обробник її перехопив (event.currentTarget).

// Відкрий консоль у прикладі і поклікай. Зверни увагу, що:

//     event.target — це завжди вихідний (і найглибший) елемент, на якому був клік
//     event.currentTarget при цьому не змінюється

// ----Припинення спливання

// Зазвичай подія буде спливати вгору до елемента window, викликаючи всі наявні обробники на своєму шляху.

// А інколи один елемент може мати кілька обробників на одну й ту саму подію.

// Уявімо, що сталася подія на елементі Descendant. Подія спливає до Child і Parent.

// Будь-який проміжний обробник може зупинити спливання цієї події за допомогою методів об’єкта події (event):

//     event.stopPropagation()
//     event.stopImmediatePropagation()

// event.stopPropagation()

//     Зупиняє "спливання" події в DOM-дереві. Це означає, що жоден батьківський елемент не зможе відловити цю подію.
//     Не заважає іншим обробникам подій виконуватися на тому ж самому елементі.

// event.stopImmediatePropagation()

//     Зупиняє "спливання" події так само, як event.stopPropagation().
//     Також зупиняє виконання всіх інших обробників подій, які слухають цю ж подію на даному елементі, навіть якщо вони були зареєстровані перед цим.

// Не припиняйте спливання без необхідності.
//  Припинення спливання створює свої підводні камені, які потім доводиться обходити. Наприклад, вебаналітика використовує спливання, щоб відстежувати дії користувача на сторінці, тому якщо зупинити спливання подій, то це унеможливить збір цієї інформації..

// ----Делегування подій

// Спливання дозволяє реалізувати один із найкорисніших прийомів — делегування подій.

// Уявімо, що є група елементів. Їх події потрібно обробляти однаково. Для цього треба додати обробник до кожного елемента. Але це не зручно.

// Делегування подій (event delegation) полягає в додаванні одного обробника на спільного предка цих елементів.

// Розглянемо делегування на прикладі:

//     створюємо елемент <div>
//     додаємо до нього будь-яку кількість кнопок, наприклад, 100
//     реєструємо на кожній кнопці слухача події кліку з обробником handleButtonClick

// Завдяки тому, що події спливають, ми можемо відловити їх на спільному предку — елементі <div>.

// Тепер є тільки один слухач події кліку з обробником handleButtonClick і браузеру не потрібно зберігати в пам'яті 100 різних слухачів.

// Отже, делегування реалізується у три прості кроки.
// 1. Визначити спільного предка групи елементів для відстеження подій.
// 2. Зареєструвати на елементі-предку обробник події, яку ми хочемо відловлювати з групи елементів.
// 3. В обробнику використовувати event.target для вибору цільового елемента, на якому безпосередньо відбулась подія.

// У коді це матиме такий вигляд:

// const box = document.querySelector(".box");

// box.addEventListener("click", function (event) {
// 	console.log(event.target); // Елемент, на якому відбулась подія click
// });

// Такий підхід спрощує ініціалізацію слухачів однотипних елементів. Можна додавати, видаляти або змінювати елементи. При цьому не потрібно вручну додавати або видаляти обробники подій на кожному з них.

// ----Перевірка цільового елемента події

// Є задача створити палітру кольорів. Палітра дає можливість вибрати колір по кліку і відображає обраний колір.

// <p class="output">Selected color: -</p>
// <div class="color-palette"></div>

// Кожен клік на елементі палітри — це подія, яка змінює колір і вміст заголовка. Елементів дуже багато. Замість призначення обробника кожному елементу палітри, повісимо один слухач на загального предка div.color-palette.

// const colorPalette = document.querySelector(".color-palette");

// colorPalette.addEventListener("click", selectColor);

// function selectColor(event) {
//  	console.log(event.target);
// 	const selectedColor = event.target.dataset.color;
// }

// В обробнику події кліка використовуємо event.target, щоб отримати елемент, на якому безпосередньо відбулася подія, і пов'язаний з ним колір. Інформацію про колір будемо зберігати в атрибуті data-color.

// Обов'язково перевіряємо цільовий елемент події click.

// Це точно має бути кнопка, в іншому разі ми випадково можемо обробити клік, коли користувач клікне між кнопками, що може викликати помилку.

// Для перевірки типу елемента використовуємо властивість nodeName.

// function selectColor(event) {
//   if (event.target.nodeName !== "BUTTON") {
//     return; // користувач клікнув між кнопками
//   }

//   const selectedColor = event.target.dataset.color; // користувач клікнув на кнопку і ми маємо доступ до її атрибутів
// }

// ----.closest
// Метод Element.closest() возвращает ближайший родительский элемент (или сам элемент), который соответствует заданному CSS-селектору или null, если таковых элементов вообще нет.
// const card = event.target.closest('.gallery-item');

/* <div id="block" title="Я - блок">
  <a href="#">Я ссылка в никуда</a>
  <a href="http://site.ru">Я ссылка на сайт</a>
  <div>
    <div id="too"></div>
  </div>
</div>; */
// var div = document.querySelector("#too"); //Это элемент от которого мы начнём
// поиск div.closest("#block"); //Результат - самый первый блок древа выше
// div.closest("div"); //Сам блок #too и будет результатом, так как он подходит
// под селектор "div" div.closest("a"); //null - В предках #too нет ни одного
// тега "a"! div.closest("div[title]"); //#block - так как ближе нет блоков с
// атрибутом title.

// ----Бібліотеки

// Бібліотеки — це набір попередньо написаних функцій, методів і класів, який надає розробнику готові інструменти для вирішення певних завдань. Бібліотеки створюються для полегшення розробки, оскільки дають змогу використовувати готові рішення, необхідні для низки завдань, без потреби писати код з нуля.

// {
//   /* <body>
//   // HTML-markup

//   // Lodash library script file
//   <script async src="<https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js>"></script>
//   //Your script file
//   <script defer src="path/to/script.js"></script>
// </body> */
// }

//     Підключення скрипта бібліотеки має бути до підключення твого основного файлу скриптів.
//     Не забудь додати тегу script бібліотеки атрибут async. Це потрібно для того, щоб файл бібліотеки завантажувався якомога швидше.

// Тепер ти можеш отримати доступ до бібліотеки у своєму скрипті.

// При підключенні бібліотек через CDN, до об'єкта window додається властивість, у якій зберігається те, що надає бібліотека. Ім'я цієї властивості унікальне для бібліотеки та описане в її документації.

// Для Lodash — це символ нижнього підкреслення _.

// console.log(_); // Весь об'єкт бібліотеки Lodash

// Для перевірки використовуй методи:

//     sum, — він обчислює суму значень у масиві
//     [shuffle](<https://lodash.com/docs/4.17.15#shuffle>) — створює масив перетасованих значень

// console.log(_.sum([4, 2, 8, 6])); // 20
// console.log(_.sum([5, 10])); // 15

// console.log(_.shuffle([1, 2, 3, 4])); // [4, 1, 3, 2]
// console.log(_.shuffle([1, 2, 3, 4])); // [3, 2, 1, 4]

// Зверни увагу! Спосіб підключення та використання бібліотек може відрізнятися залежно від конкретної бібліотеки.

// Усі сучасні бібліотеки надають документацію та приклади використання на своїх офіційних вебсайтах, що може допомогти глибше розібратися в їхньому функціоналі.

// ----Встановлення та підключення бібліотеки
// читай на сайті

// ----деструктуризація

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
// };

// let { title, author, genres } = book;

// console.log(book);
// console.log(genres);

// // Деструктуризуємо
// const { title, author, isPublic, rating } = book;

// // Використовуємо
// const accessType = isPublic ? 'pulbic' : 'private';
// const message = `Book ${title} by author ${author} with rating ${rating} is in ${accessType} access!`;

// Деструктуризація завжди знаходиться в лівій частині операції присвоювання.
// Змінним усередині фігурних дужок присвоюються значення однойменних властивостей об'єкта з відповідними іменами.
// Послідовність оголошення змінних у фігурних дужках не важлива.

// Коли в об'єкті немає властивості з таким ім'ям, змінній буде присвоєно undefined.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
// };

// // Додамо зображення обкладинки, якщо вона відсутня в об'єкті книги
// const {
//   title,
//   author,
//   coverImage = "<https://via.placeholder.com/640/480>"
// } = book;

// console.log(title); // "The Last Kingdom"
// console.log(author); // "Bernard Cornwell"
// console.log(coverImage); // "<https://via.placeholder.com/640/480>"

// ----переймкнування властивості
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };

// Деструктуризуємо
// const { author: bookAuthor, rating: bookRating } = book;
// console.log(title); // "The Last Kingdom"
// console.log(bookRating); // 8.38
// console.log(bookAuthor); // "Bernard Cornwell"

// ----Значення за замовчуванням

// Для цього після нового імені ставимо дорівнює = і вказуємо її значення за замовчуванням.

// const {
//   title,
//   coverImage: bookCoverImage = '<https://via.placeholder.com/640/480>',
// } = book;

// ----деструктуризація масивів

// const arr = [1, 2, 3, 4, 5];

// const [n1, n2, n3, n4, n5] = arr;
// console.log(n2, n4, n5);

//  ...rest розрилення, залишок масиву в масив
// const [n1, n2, ...other] = arr;
// console.log(n2, other);

// ----Деструктуризація в циклах

// Під час ітерації по масиву об'єктів циклом for...of відбуваються багаторазові звернення до властивостей об'єкта.

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
// ];

// // Для того щоб скоротити кількість повторень, можна деструктуризувати властивості об'єкта в локальні змінні в тілі циклу.

// for (const book of books) {
//   const { title, author, rating } = book;

//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// // Якщо об'єкт містить небагато властивостей, деструктуризацію можна виконати безпосередньо в місці оголошення змінної book.

// for (const { title, author, rating } of books) {
//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// ----Деструктуризація параметрів

// Під час передачі об'єктів у функції, можна деструктуризувати об'єкти, щоб отримати доступ до потрібних даних. Це дає змогу явно вказати, які поля об'єкта використовуються у функції.

// деструктуризація з перейменуванням властивостей для того щоб звертатись до властивостей подібних об'єктів

// const user1 = {
//   username: 'Alex',
//   age: 27,
//   city: 'London',
// };

// const user2 = {
//   username: 'Max',
//   age: 34,
//   city: 'LA',
// };

// const { username: un1, age: ag1, city: ct1 } = user1;
// const { username, un2, age: ag2, city: ct2 } = user2;
// console.log();

// Без деструктуризації об'єкта:

// function printUserInfo(user) {
//   console.log(`Name: ${user.name}, Age: ${user.age}, Hobby: ${user.hobby}`);
// }

// printUserInfo({
//   name: 'Alice',
//   age: 25,
//   hobby: 'dancing',
// }); // Name: Alice, Age: 25, Hobby: dancing

// // З деструктуризацією об'єкта в тілі функції:

// function printUserInfo(user) {
//   const { name, age, hobby } = user;
//   console.log(`Name: ${name}, Age: ${age}, Hobby: ${hobby}`);
// }

// printUserInfo({
//   name: 'Alice',
//   age: 25,
//   hobby: 'dancing',
// }); // Name: Alice, Age: 25, Hobby: dancing

// // Із деструктуризацією об'єкта в місці оголошення параметрів:

// function printUserInfo({ name, age, hobby }) {
//   console.log(`Name: ${name}, Age: ${age}, Hobby: ${hobby}`);
// }

// printUserInfo({
//   name: 'Alice',
//   age: 25,
//   hobby: 'dancing',
// }); // Name: Alice, Age: 25, Hobby: dancing

// ----Патерн «Об'єкт параметрів»

// Якщо функція приймає більше 2-3 параметрів, дуже просто заплутатися, в якій послідовності і що передавати.

// В результаті виходить дуже неочевидний код у місці її виклику.

// function doStuffWithBook(title, pages, downloads, rating, isPublic) {
//   // Робимо щось з параметрами
//   console.log(title);
//   console.log(numberOfPages);
//   // І так далі
// }

// ❌ Що таке 736? Що таке 10283? Що таке true?
// doStuffWithBook('The Last Kingdom', 736, 10283, 8.38, true);

// Патерн «Об'єкт параметрів» допомагає вирішити цю проблему.

// Він заміняє набір параметрів всього одним — об'єктом з іменованими властивостями.

// function doStuffWithBook(book) {
//   // Робимо щось з властивостями об'єкта
//   console.log(book.title);
//   console.log(book.pages);
//   // І так далі
// }

// // Таким чином, під час її виклику передаємо один об'єкт з необхідними властивостями.

// // ✅ Все зрозуміло
// doStuffWithBook({
//   title: 'The Last Kingdom',
//   pages: 736,
//   downloads: 10283,
//   rating: 8.38,
//   isPublic: true,
// });

// // Ще одна перевага в тому, що можна деструктуризувати об'єкт у параметрі book.

// // Це можна зробити в тілі функції.

// function doStuffWithBook(book) {
//   const { title, pages, downloads, rating, isPublic } = book;
//   console.log(title);
//   console.log(pages);
// }

// // Або в сигнатурі (підписі) функції — різниці немає.

// function doStuffWithBook({ title, pages, downloads, rating, isPublic }) {
//   console.log(title);
//   console.log(pages);
// }

// ----глибока дкструктуризація

// коли об'єкт в об'єкті

// Для цього в деструктуризації після імені властивості ставимо двокрапку : та починаємо деструктуризацію об'єкта для цієї властивості.

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views, likes },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(views); // 4827
// console.log(likes); // 1308

// ----часткова деструктуризаця об'єктів

// Можна деструктуризувати певні властивості в окремі змінні, а решту зібрати в новий об'єкт.

// const user = {
// 	name: "Jacob",
// 	age: 32,
// 	email: "j.cob@mail.com",
// 	isOnline: true
// };

// const { name, isOnline, ...otherProps } = user;

// console.log(name); // "Jacob"
// console.log(isOnline); // true
// console.log(otherProps); // {age: 32, email: "j.cob@mail.com"}

// При цьому оригінальний об'єкт не змінюється, у змінній otherProps буде новий об'єкт із копіями зібраних властивостей.

// ----Деструктуризація масивів

// Деструктуризоване присвоювання можна використовувати не тільки для об’єктів, а й для масивів, але з деякими особливостями.

//     Замість фігурних дужок {} використовуються квадратні [].

// Наприклад, є масив чисел. З нього потрібно отримати значення кожної складової кольору в окремих змінних.

// const color = [200, 255, 100];
// const [ red, green, blue ] = color;

// console.log(`rgb(${red}, ${green}, ${blue})`); // “rgb(200, 255, 100)"

// Після ключового слова const або let ставимо квадратні дужки, як і у випадку з оголошенням масиву. Всередині дужок, через кому, вказуємо імена змінних, у які будуть поміщені значення відповідних елементів масиву.

// Внаслідок такого запису будуть створені 3 змінні, і в них будуть поміщені елементи в нумерованому порядку: від 0 і до кінця масиву.

// ----Значення за замовчуванням
// const color = [200, 100, 255];
// const [ red, green, blue, alfa = 0.3 ] = color;

// console.log(rgba(${red}, ${green}, ${blue}, ${alfa})); // “rgba(200, 255, 100, 0.3)"

// ----Часткова деструктуризація масиву

// Іноді з масиву необхідно деструктуризувати тільки перші N елементів, а інші зберегти в одну змінну у вигляді масиву.

// Деструктуризуючи масив, можна розпакувати перші необхідні елементи і присвоїти іншу частину елементів масиву змінній, використовуючи операцію ...rest.

// const color = [200, 255, 100];

// const [ red, ...otherColors ] = color;

// console.log(red); // 200
// console.log(otherColors); // [255, 100]

// При цьому оригінальний масив не змінюється, у змінній otherColor буде новий масив із копіями зібраних значень.

// ----Деструктуризація параметрів

// Під час передачі масиву у функцію, можна деструктуризувати його елементи.

// Без деструктуризації:

// function printFruits(fruits) {
//   console.log(fruits[0], fruits[1], fruits[2]);
// }

// printFruits(["apple", "banana", "orange"]); // "apple banana orange"

// Із деструктуризацією в місці оголошення параметрів:

// function printFruits([firstFruit, secondFruit, thirdFruit]) {
//   console.log(firstFruit, secondFruit, thirdFruit);
// }

// printFruits(["apple", "banana", "orange"]); // "apple banana orange"

// Переваги деструктуризації

// Давай підсумуємо переваги деструктуризації:

//     Зручне вилучення значень з об'єктів і масивів: Замість того, щоб щоразу звертатися до полів об'єкта або елементів масиву за їхніми індексами або іменами, можна одразу витягти потрібні значення у змінні.
//     Короткий і читабельний код: Деструктуризація робить код коротшим і зрозумілішим. Замість довгих виразів доступу до полів об'єктів або елементів масиву, можна відразу присвоїти значення змінним зі зрозумілими іменами.
//     Параметри функцій: При передачі об'єктів у функції, можна деструктуризувати об'єкти, щоб отримати доступ до потрібних даних. Це дозволяє явно вказати, які поля об'єкта використовуються у функції.
//     Робота з функціями, що повертають об'єкти: Якщо функція повертає об'єкт, можна відразу деструктуризувати цей об'єкт, щоб витягти з нього значення.

// const users = [
//   {
//     name: 'kate',
//   },
//   {
//     name: 'ann',
//   },
//   {
//     name: 'max',
//   },
// ];

// const names = [];

// for (let user of users) {
//   names.push(user.name);
// }

// for (let { name } of users) {
//   names.push(name);
// }

// const names = users.map(({ name }) => name);
// console.log(names);

// exersise
// Use destructuring to create two new arrays:

//     titlesArray: An array containing only the book titles.
//     authorsAndGenres: An array of objects, where each object contains only the author and genre properties of the original books.

// const books = [
//   {
//     title: 'The Lord of the Rings',
//     author: 'J.R.R. Tolkien',
//     genre: 'Fantasy',
//   },
//   { title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance' },
//   {
//     title: "The Hitchhiker's Guide to the Galaxy",
//     author: 'Douglas Adams',
//     genre: 'Science Fiction',
//   },
// ];

// const titles = books.map(({ title }) => title);
// console.log(titles);

// const autorsAndGenres = books.map(({ author, genre }) => ({ author, genre }));
// console.log(autorsAndGenres);

// const user = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// function printInfo({ name, tag = 'nonetag', stats: { views } }) {
//   console.log(`Username -> ${name}, tag -> ${tag}, views: ${views}`);
// }

// printInfo(user);

const parent = document.querySelector('#parent');
const child = document.querySelector('#child');
const innerChild = document.querySelector('#inner-child');

parent.addEventListener('click', event => {
  console.log('parent-target', event.target);
  console.log('parent-current-target', event.currentTarget);
});

// child.addEventListener('click', event => {
//   console.log('Child-target', event.target);
//   console.log('child-current-target', event.currentTarget);
// });

// innerChild.addEventListener('click', event => {
//   console.log('inner-child-target', event.target);
//   console.log('inner-child-currentTarget', event.currentTarget);
// });
