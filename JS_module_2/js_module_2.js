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

// function checkAge(age) {
//   if (age >= 18) {
//     return "You are an adult";
//   } else {
//     return "You are not adult";
//   }
// }
// let age = 17;
// const result = checkAge(age);
// console.log(result);

// тут передаємо через іншу змінну

// function checkAge(age) {
//   if (age >= 18) {
//     return "You are an adult";
//   }
// }
// const age_1 = 19;
// const result = checkAge(age_1);
// console.log(result);

// // ------------
// const grade = 95;
// if (grade >= 70) {
//   console.log("Satisfactorily");
// } else {
//   console.log("Unsatisfactorily");
// }

// exersise----------------------------------------
// Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про результат.
// available - доступна кількість товарів на складі
// ordered - кількість одиниць товару в замовленні

// function checkStorage(available, ordered) {
//   if (ordered > available) {
//     return "Not enough goods in stock!";
//   } else {
//     return "Order is processed, our manager will contact you";
//   }
// }
// const available = 20;
// const ordered = 30;
// const result = checkStorage(available, ordered);
// console.log(result);
// ---------------------------------------------

// Блок else...if
// умови перевіряються почерзі, Перевірка зупиняється, щойно програма знаходить першу умову, яка задовільняється.
// if (4 > 3) {
//   console.log(1);
// } else if (3 > 2) {
//   console.log(2);
// } else if (4 > 1) {
//   console.log(3);
// } else {
// }
// another example
// const grade = 71;
// if (grade >= 90) {
//   console.log("perfect");
// } else if (grade >= 80) {
//   console.log("good");
// } else if (grade >= 70) {
//   console.log("Satisfactorily");
// } else {
//   console.log("Unsatisfactorily");
// }

// Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику.

// available - доступна кількість товарів на складі
// ordered - кількість одиниць товару в замовленні
// Використовуючи розгалуження, доповни код функції таким чином, щоб:

// Якщо в замовленні ще немає товарів, тобто значення параметра ordered дорівнює 0, функція повертає рядок "There are no products in the order!".
// Якщо товарів у замовленні більше, ніж їх доступно на складі, то функція повертає рядок "Your order is too large, there are not enough items in stock!".
// В іншому випадку функція повертає рядок "The order is accepted, our manager will contact you".

// function checkStorage(available, ordered) {
//   if (ordered == 0) {
//     return "There are no products in the order!";
//   } else if (ordered > available) {
//     return "Your order is too large, there are not enough items in stock!";
//   } else {
//     return "The order is accepted, our manager will contact you";
//   }
// }
// let available = 200;
// let ordered = 250;
// const result = checkStorage(available, ordered);
// console.log(result);

// Тернарний оператор---------------
// <condition> ? <expression if condition is true> : <expression if condition is false>
// Він працює таким чином:

// обчислюється умова condition;
// якщо умова істинна (перетворюється до true), обчислюється вираз після ?;
// якщо умова хибна (перетворюється до false), обчислюється вираз після :;
// значення обчисленого виразу повертається як результат роботи тернарного оператора.

// ось по старому
// let type;
// const age = 12;

// if (age >= 18) {
//   type = "adult";
// } else {
//   type = "child";
// }

// ось по новому

// console.log(type); // 'adult'

// const age = 12;
// const type = age >= 18 ? "adult" : "child";
// console.log(type); // 'adult'

// a тут ми заміняємо else if тернарним оператором-----

// const age = 51;
// const type =
//   age <= 18 ? "child" : age <= 22 ? "did" : age <= 50 ? "xyu" : "died";
// console.log(type);

// другий приклад------

// const a = 5;
// const b = 10;
// let biggerNumber;

// if (a > b) {
//   biggerNumber = a;
// } else {
//   biggerNumber = b;
// }
// console.log(biggerNumber); // 10

// тепер тернарним
// const a = 5;
// const b = 10;
// let biggerNumber = a > b ? a : b;

// console.log(biggerNumber); // 10

// exersise

// Функція checkPassword(password) порівнює переданий їй пароль (параметр password) зі збереженим паролем адміністратора (correctPassword) і повертає рядок з повідомленням про результат.

// Використовуючи тернарний оператор, доповни функцію таким чином, щоб:

// Якщо значення password і correctPassword збігаються, функція повертала рядок "Access granted"
// В іншому випадку, функція повертала рядок "Access denied, wrong password!"

// function checkPassword(password) {
//   const correctPassword = "jqueryismyjam";
//   return password === correctPassword
//     ? "Access granted"
//     : "Access denied, wrong password!";
// }
// let password = "jqueryismyjam";
// const result = checkPassword(password);
// console.log(result);

// Оператор switch-----------

// Вираз (expression) в операторі switch обчислюється.
// Значення виразу порівнюється з кожним блоком case зверху вниз.
// Якщо значення виразу відповідає значенню в блоці case, виконується код цього блоку.
// Коли виконання коду блоку case завершено, необхідно використовувати оператор break, щоб вийти зі switch. Це запобігає виконанню коду в наступних блоках case.
// Якщо жодне значення не відповідає виразу, виконається код у блоці default (якщо він є).

// const fruit = "orange";

// switch (fruit) {
//   case "apple":
//     console.log("Apple selected");
//     break;
//   case "banana":
//     console.log("Banana selected");
//     break;
//   case "orange":
//     console.log("Orange selected");
//     break;
//   default:
//     console.log("The fruit is unknown");
// }

// Функція getSubscriptionPrice(type) отримує рядок з типом передплати користувача (параметр type), перевіряє її на збіг з трьома можливими типами щомісячної передплати та повертає ціну, або повідомлення про неправильний тип передплати.

// Якщо значення параметра type — це рядок:

// "starter" — ціна передплати 0 кредитів.
// "professional" — ціна передплати 20 кредитів.
// "organization" — ціна передплати 50 кредитів.
// Для будь-якого іншого значення параметра type повертається рядок "Invalid subscription type!".

// Використай оператор switch для розв'язання цієї задачі!

// function getSubscriptionPrice(type) {
//   switch (type) {
//     case "starter":
//       return 0;
//     case "professional":
//       return 20;
//     case "organization":
//       return 50;
//     default:
//       return "Invalid subscription type!";
//   }
// }

// const result = getSubscriptionPrice("professional");
// console.log(result);
// =======================

// Пам’ятка під час використання розгалужень

// Наразі тобі знайомі кілька способів, як зробити розгалуження. Під час вибору слід пам’ятати:

// Інструкція if є універсальною. Інструкції if…else і else…if використовуються, коли потрібно прописати декілька умов. Отже, ці інструкції зазвичай довші, ніж інші способи розгалужень.
// Тернарний оператор краще використовувати для присвоєння або повернення значення з тіла функції. В умові тернарного оператора може бути все що завгодно: перевірка рівності / нерівності, на більше / менше, просто перевірка на буль чого-небудь.
// Пам’ятай про обмеження: у нього має бути рівно 2 сценарії, не більше.
// Оператор switch перевіряє тільки на сувору рівність.
// Використовуючи оператор switch, завжди:
// — пам’ятай про оператор break
// — використовуй тільки 1 default, він завжди має бути останнім.

// ===================

// Оператор “І” зліва направо перевіряє почергово обидва операнди на істинність та повертає або значення останнього істинного (тільки правого) операнда, або першого хибного (лівого чи правого), на якому він запнувся.
// const screenWidth = 1400;
// const sm = 320;
// const md = 768;
// const lg = 1200;

// if (screenWidth <= sm) {
//   console.log("Mobile screen");
// } else if (screenWidth > sm && screenWidth <= md) {
//   console.log("Tablet screen");
// } else if (screenWidth > md && screenWidth <= lg) {
//   console.log("Desktop screen");
// } else {
//   console.log("Godzilla screen");
// }
// Приклад вище має ланцюжок перевірок, розглянемо їх.

// Спочатку перевіряється умова if, тобто 700 < 320, вона повертає false, тому тіло блоку if ігнорується і виконання коду переходить далі до блоку else...if.

// У ньому є умова screenWidth > sm && screenWidth ≤ md.

// Спочатку обчислиться лівий операнд, умова 700 > 320 , яка поверне true , потім правий — 700 <= 768 , який теж поверне true.

// Оскільки обидва операнди істинні, то true && true поверне значення крайнього істинного операнда, тобто true . Завдяки тому, що в умові інструкції else...if буде true, виконається її тіло і в консоль виведеться рядок “Tablet screen”

// null && true //null

// якщо хоча б один із операндів буде приведений до false, результатом буде значення хибного операнда. Маємо операнди null і true. Ще з теми Перетворення типів: логічне знаємо, що null — перетворюються на false, тобто є хибним. Саме це значення буде результатом виразу.

// Запам’ятай 6 випадків, які приводяться до false:
// 0
// ""
// NaN
// null
// undefined
// false

// Функція isNumberInRange(start, end, number) перевіряє, чи входить число у проміжок. Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

// number - число, входження якого перевіряється
// start - початок числового проміжку
// end - кінець числового проміжку
// Використовуючи оператор &&, доповни функцію isNumberInRange таким чином, щоб вона повертала результат входження number у числовий проміжок від start до end включно. Тобто число повинно бути одночасно і більшим або дорівнювати start, і меншим або дорівнювати end. Результатом виклику функції має бути буль true або false.

// function isNumberInRange(start, end, number) {
//   if (number >= start && number <= end) {
//     return true;
//   } else if (number < start || number > end) {
//     return false;
//   }
// }
// const a = isNumberInRange(10, 20, 22);
// console.log(a);

// ---------
// Логічне «АБО»
// Оператор "АБО" (||) перетворює всі операнди до логічного типу (true або false) і повертає значення одного з них.
// Дозволяє перевіряти, чи є хоча б один із операндів "істинним”.
// Обчислення оператора відбувається зліва направо.

// Оператор "АБО" замикається на вірному операнді і повертає значення операнда, на якому запнувся, або значення крайнього правого операнда. Якщо лівий операнд був перетворений на true, правий операнд не обчислюється.
// const a = 5;
// console.log(a < 10 || a > 30); // true || false -> true

// const b = 50;
// console.log(b < 10 || b > 30); // false || true -> true

// const c = 20;
// console.log(c - 20 || c * 2); // 0 || 40 -> 40

// exersise
// Функція checkAccess(subType) перевіряє, чи може користувач отримати доступ до контенту. Перевірка відбувається за типом передплати. Використовуючи оператор "АБО", доповни код функції так, щоб якщо значення параметра subType дорівнює рядкам "pro" або "vip", то функція повертала true і користувач отримував доступ. В іншому випадку повертала false.

// function checkAccess(subType) {
//   if (subType == "pro" || subType == "vip") {
//     return true;
//   } else {
//     return false;
//   }
// }
// const result = checkAccess("vip");
// console.log(result);

// logic NO--------

// Логічне «НІ» приводить операнд до логічного значення (true або false) і потім заперечує (інвертує) його, тобто заміняє на протилежне: true —> false, а false —> true.
// console.log(!true); // false
// console.log(!false); // true
// console.log(!3); // !3 -> !true -> false
// console.log(!"Mango"); // !"Mango" -> !true -> false
// console.log(!0); // !0 -> !false -> true
// console.log(!""); // !"" -> !false -> true
// console.log(!null); // !null -> !false -> true

// const isBlocked = false;
// const canChat = !isBlocked; // !false -> true

// if (canChat) {
//   console.log("Can type in chat!");
// } else {
//   console.log("Blocked from typing in chat!");
// }

// ------METHODS-----------------------

// method length - return length of string
// const message = "JavaScript is awesome";
// console.log(message.length); // 21

// const message = "JavaScript is awesome";
// console.log(message.toUpperCase()); // "JAVASCRIPT IS AWESOME"

// Метод slice()
// str.slice(startIndex, endIndex);
// str — вихідний рядок, з якого робитиметься копія.
// startIndex — індекс, з якого починається копіювання елементів рядка.
// endIndex — індекс, до якого (не включаючи) йде копіювання елементів рядка.

// const fullName = "Jacob Mercer";
// const firstName = fullName.slice(0, 5);
// const lastName = fullName.slice(6);

// console.log(fullName); // "Jacob Mercer"
// console.log(firstName); // "Jacob"
// console.log(lastName); // "Mercer"

// =-------Методи toLowerCase() і toUpperCase()

// const message = "Welcome to Bahamas!";
// console.log(message.toLowerCase()); // "welcome to bahamas!"
// console.log(message); // "Welcome to Bahamas!"

// const message = "Welcome to Bahamas!";
// console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"
// console.log(message); // "Welcome to Bahamas!"

// Функція normalizeInput(input, to) оголошує два параметри:

// input - рядок, який потрібно привести до певного регістру
// to - рядок с двома можливими значеннями: "upper" або "lower", що вказують до якого регістру потрібно привести значення input
// Доповни код функції таким чином, щоб:

// Якщо значення параметра to — це рядок "upper", то функція повертала копію рядка input, але у верхньому регістрі
// В іншому разі, функція повертала копію рядка inputу нижньому регістрі

// function normalizeInput(input, to) {
//   if (to == "upper") {
//     return input.toUpperCase();
//   } else {
//     return input.toLowerCase();
//   }
// }
// let result = normalizeInput("FerFgk", "upper");
// console.log(result);

// method includes()
// str.includes(substring)
// де:
// str — вихідний рядок, у якому ми шукаємо підрядок;
// substring — підрядок, який ми хочемо знайти у вихідному рядку.
// const username = 'Jacob Mercer';
// console.log(username.includes('Jacob')); // true
// console.log(username.includes('John')); // false

// Метод includes() корисний, коли нам необхідно виконати зазначені дії за умови, коли рядок містить певний підрядок.
// const message = "Please buy our stuff!";
// const hasSpam = message.includes("buy");

// if (hasSpam) {
//   console.log("Warning: This message contains forbidden words.");
// } else {
//   console.log("You can safely open this message.");
// }

// Функція checkForName(fullName, firstName) приймає два параметри та повертає буль true або false - результат перевірки входження підрядка firstName у рядок fullName.

// fullName - рядок, що містить повне ім'я
// firstName - рядок, що містить ім'я для перевірки його входження в повне ім'я
// Доповни тіло функції таким чином, щоб вона повертала результат перевірки входження імені (параметр firstName), у повне ім'я (параметр fullName). Врахуй, що регістр символів в параметрах fullName і firstName наперед не відомий. Перед перевіркою входження не забудь прирівняти їх до однакового регістру.

// function checkForName(fullName, firstName) {
//   fullName = fullName.toLowerCase();
//   firstName = firstName.toLowerCase();
//   if (fullName.includes(firstName)) {
//     return true;
//   } else {
//     return false;
//   }
// }
// let result = checkForName("Miroslav Vakul", "mir");
// console.log(result);

// тепер тернарним

// function checkForName(fullName, firstName) {
//   return fullName.toLowerCase().includes(firstName.toLowerCase())
//     ? true
//     : false;
// }
// let result = checkForName("Miroslav Vakul", "mir");
// console.log(result);

// function toggleModalVisibility(isVisible) {
//   return !isVisible;
// }
// let isVisible = false
// const a = toggleModalVisibility(isVisible);
// console.log(a)

// Функція getSubstring(string, length) приймає рядок і повертає новий підрядок (його часткову копію). Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:

//     string - оригінальний рядок
//     length - довжина нового підрядка

// Доповни код функції так, щоб вона повертала новий підрядок, який починається від початку string і має довжину length.
// function getSubstring(string, length) {
//   return string.slice(0, length);
// }
// let length = 3;
// let string = "declar";
// console.log(getSubstring(string, length));

// ----------Метод endsWith()
// Метод endsWith() перевіряє, чи закінчується рядок вказаним підрядком.
// str.endsWith(substr)

// Функція checkFileExtension(fileName, ext) приймає два параметри:
// fileName - рядок, що зберігає ім'я файлу з розширенням, наприклад, styles.css, hello.js тощо.
// ext - рядок, що зберігає розширення, наприклад, .css, .js тощо
// Доповни код функції так, щоб:
// Якщо ім'я файлу fileName закінчується розширенням, зазначеним у параметрі ext, то функція повертала рядок "File extension matches"
// В іншому разі, функція повертала рядок "File extension does not match"

// function checkFileExtension(fileName, ext) {
//   return fileName.endsWith(ext)
//     ? "File extension matches"
//     : "File extension does not match";
// }

// let fileName = "tlf.zip";
// let ext = ".zip";
// console.log(checkFileExtension(fileName, ext));

// -------Метод indexOf()

// Метод indexOf() використовується для пошуку першого входження підрядка в рядок. Він повертає:
// індекс першого входження (індекс першого символу) підрядка, якщо він знайдений або
// -1, якщо підрядок не виявлено

// let a = "robert";
// let b = a.indexOf("t");
// console.log(b);

// Функція getFileName(file) приймає один параметр

// file - рядок з іменем файлу. Ім'я файлу може бути з розширенням, наприклад: styles.css, app.js або без, наприклад: styles, app.
// Використовуючи методи indexOf та slice, доповни код функції таким чином, щоб:

// Вона перевіряла наявність розширення в імені файлу (назва розширення відокремлюється від імені файла крапкою)
// Якщо ім'я файлу не містить розширення, то функція повертала новий підрядок, що містить ім'я файлу без змін
// В іншому разі функція повертала підрядок з іменем файлу, але без розширення

// function getFileName(file) {
//   const positionDot = file.indexOf(".");
//   if (positionDot !== -1 && positionDot > 0) {
//     return `${file}`;
//   } else {
//     return file.slice(0, positionDot);
//   }
// }
// console.log(getFileName("reg.reg"));

// function getFileName(file) {
//   // const positionDot = file.indexOf("."); в рівняння для скорочення можна вставляти відразу метод, так const не потрібна
//   if (file.indexOf(".") == -1) {
//     return `${file}`;
//   } else {
//     return file.slice(0, file.indexOf("."));
//   }
// }
// console.log(getFileName("reg.rg"));

// тепер тернарним-------

// function getFileName(file) {
//   return file.indexOf(".") == -1 ? `${file}` : file.slice(0, file.indexOf("."));
// }
// console.log(getFileName("reg.rg"));

// --
// Метод trim()
// Метод trim() використовується для видалення початкових і кінцевих пробілів із рядка.
// str.trim();

// Функція createFileName(name, ext) приймає два параметри:

// name - рядок, що зберігає ім'я файлу без розширення, яке вводить користувач. Воно може містити зайві пробіли на початку або в кінці рядка, наприклад "order ", " finance " тощо
// ext - рядок, що зберігає розширення, наприклад "txt", "xml" тощо
// Використовуючи синтаксис шаблонних рядків і метод trim(), доповни код функції таким чином, щоб вона повертала повне (об'єднане) ім'я файлу з доданим розширенням, зазначеним у параметрі ext у форматі ім'я.розширення. Також повне ім'я файлу не повинно містити зайвих пробілів на початку або наприкінці.

// function createFileName(name, ext) {
//   return name.trim() + "." + ext;
// }
// console.log(createFileName("  trhj   ", "ref"));

// ================= Цикли ===============
// while (condition) {
//   statement; // код, тіло циклу
// }

// let count = 0;
// while (count < 10) {
//   console.log(`Count: ${count}`);
//   count += 3;
// }
// console.log(count);

// Функція calculateTotal(number) приймає ціле число (параметр number). Доповни код функції так, щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.
// function calculateTotal(number) {
//   let total = 0;
//   let i = 1;
//   while (i <= number) {
//     total += i;
//     i++;
//   }
//   return total;
// }

// console.log(calculateTotal(3));

// -----do while

// let count = 4;

// do {
//   console.log(`Count: ${count}`);
//   count += 2;
// } while (count < 20);

// ------ for----
// for (let i = 2; i <= 100; i += 2) {
//   console.log(i);
// }

// !!!!!------задачку недопоняв--------

// Функція calculateTotal(number) приймає ціле число (параметр number) Використовуючи цикл for, доповни код функції так, щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

// function calculateTotal(number) {
//   let sum = 0;
//   for (let i = 1; i <= number; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(calculateTotal(3));

// -------інкремент-------
// проефіксний - (++value) спочатку збільшує значення змінної, а потім використовує нове значення у виразі.
// let x = 5;
// const y = ++x;
// console.log(x); // 6
// console.log(y); // 6

// Постфіксний інкремент (value++) спочатку використовує поточне значення змінної у виразі, а потім виконує збільшення значення.
// let x = 5;
// const y = x++;
// console.log(x); // 6
// console.log(y); // 5

// -----Декремент ----
//  --value

// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }

// Функція calculateEvenTotal(number) приймає ціле число (параметр number). Доповни код функції так, щоб вона повертала суму всіх парних цілих чисел від одиниці до цього числа включно. Парні числа — це ті, що можна поділити на 2 без остачі (як це зробити розглядалося у темі Арифметичні операції у модулі 1). Наприклад, якщо number дорівнює 6, то сума - це 2 + 4 + 6, тобто 12.

// function calculateTotal(number) {
//   let sum = 2;
//   for (let i = 1; i <= number; i++) {
//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// function calculateEvenTotal(number) {
//   for (let i = 0; i == 1; i++) {}
//   const count = Math.floor(number / 2);
//   const sum = count * (count + 1);

//   return sum;
// }

// function calculateEvenTotal(number) {
//   let sum = 0;
//   for (let i = 0; i <= number; i++) {
//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }
// console.log(calculateEvenTotal(6));

// --------Оператор break
// Оператор break використовується в циклі для переривання його виконання. Коли оператор break зустрічається всередині циклу, виконання циклу негайно припиняється, і керування передається до наступної інструкції після циклу.

// Оператор break зазвичай використовується разом з умовними операторами або операторами порівняння всередині циклу, щоб перевіряти певну умову і, якщо вона виконується, переривати виконання циклу.

// for (let i = 0; i < 10; i += 1) {
//   console.log(i);

//   if (i === 5) {
//     console.log("Met the number 5, interrupt the execution of the cycle");
//     break;
//   }
// }

// console.log("Log after cycle");

// Доповни код таким чином, щоб у змінну number записувалося перше число у проміжку від start до end, яке ділиться на 5 без остачі.

// const start = 6;
// const end = 17;
// let number;

// for (let i = start; i < end; i++) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// console.log(number);

// ---------Оператор break і функції

// Коли оператор break зустрічається всередині циклу, виконання циклу негайно припиняється, і керування передається на наступну інструкцію за циклом, навіть якщо цикл знаходиться всередині функції. Тобто оператор break не припиняє виконання функції, а тільки перериває цикл.

// function findNumberFromFive(max, target) {
//   console.log("Log in the body of the function before the cycle");

//   for (let i = 5; i <= max; i += 1) {
//     console.log("Current counter value i:", i);

//     if (i === target) {
//       console.log(`Found the number $ {target}, interrupt the cycle`);
//       break;
//     }
//   }

//   console.log("Log in body function after cycle");
// }

// findNumberFromFive(10, 6);
// console.log("Log after exiting function");

// Для того щоб переривати виконання одразу циклу і функції і повернути результат у зовнішній код, є оператор return.

// У прикладі шукаємо число 6. Щойно виконається умова if, робимо повернення, яке перерве виконання циклу і функції.

// function findNumberFromFive(max, target) {
//   console.log("Log in the body of the function before the cycle");

//   for (let i = 5; i <= max; i += 1) {
//     console.log("Current counter value i:", i);

//     if (i === target) {
//       console.log(
//         `Found the number $ {target}, we make a return, interrupting the loop and function`
//       );
//       return i;
//     }
//   }

//   // Цей console.log не виконується
//   console.log("Log in body function after cycle");
// }

// const result = findNumberFromFive(10, 6);
// console.log("Log after exiting function");
// console.log(`Result of function execution ${result}`);

// Функція findNumber(start, end, divisor) приймає три параметра, які є цілими числами.

// Доповни код функції таким чином, щоб вона:

// повертала перше число у діапазоні від start до end включно, яке ділиться на divisor без остачі
// не використовуй оператор break

function findNumber(start, end, divisor) {
  for (let i = start; i <= end; i++) {
    if (i % divisor === 0) {
      return i;
    }
  }
}
console.log(findNumber(2, 50, 3));
