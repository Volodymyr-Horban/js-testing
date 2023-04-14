//TODO: 1 ===================================
// Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно'.

// const a = Number(prompt('Enter your number'));
// a === 10 ? alert('Вірно') : alert('Невірно');

//TODO: 2 ===================================
// У змінній min лежить число від 0 до 59. Визначте у котру чверть години
// Попадає це число (у першу, другу, третю або четверту).

// const min = prompt('Enter minute');
// console.log(min);

// if (min > 0 && min < 15) {
//     alert('First quarter');
// } else if (min >= 15 && min < 30) {
//     alert('Second quarter');
// } else if (min >= 30 && min < 45) {
//     alert('Third quarter');
// } else if (min >= 45 && min <= 59) {
//     alert('Fourth quarter');
// } else {
//     alert('Enter correct minute');
// }


//TODO: 3 ===================================
// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

// let num = prompt("Введіть цифру від 1 до 4");
// let result;

// switch (num) {
//     case "1":
//         result = "зима";
//         break;
//     case "2":
//         result = "весна";
//         break;
//     case "3":
//         result = "літо";
//         break;
//     case "4":
//         result = "осінь";
//         break;
//     default:
//         result = "Введіть коректну цифру";
            
// }
// alert(result);

//TODO: 4 ===================================
// скористаємося циклом while та виведіть у консоль числа від 0 до 50

// let num = 0;

// while (num <= 50) {
//     console.log(num)
//     num +=1
// }

//TODO: 5 ===================================
//Використовуючи конструкцію if...else,
//напишіть код, який запитуватиме:
//"Яка офіційна назва JavaScript?"
//Якщо користувач вводить "ECMAScript",
// показати через alert: "Вірно!"
//інакше відобразити: "Не знаєте? ECMAScript!"

// let question = prompt('Яка офіційна назва JavaScript?');
// let normalezedToUpperCaseQuestoin = question.toUpperCase();
// let result;

// if (normalezedToUpperCaseQuestoin === "ECMASCRIPT") {
//     alert("Вірно!");
// } else {
//     alert("Не знаєте? ECMAScript!");
// }

//TODO: 6 ===================================
// Напишіть програму, яка отримає від користувача
//число (кількість хвилин) і виведе у консоль
//рядок у форматі годин і хвилин
//70 === 01:10
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

// let userInput = Number(prompt("Enter quantity a minutes"));
// let hours;
// let minutes;

// minutes = String(userInput % 60).padStart(2, 0);
// hours = String(Math.floor(userInput / 60)).padStart(2, 0);

// console.log(`${hours}:${minutes}`);

//TODO: 7 ===================================
//Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max

// const max = 43;
// const min = 28;

// let binateSum = 0;

// for (let i = max; i >= min; i -= 1) {
//     console.log(i);
//     if (i % 2 === 0) {
//         binateSum += i;
//     }
// }
// console.log(binateSum);

//TODO: 8 ===================================
//Напишіть код, який запитуватиме
//логін за допомогою prompt і логувати результат
//в консоль браузера

//Якщо відвідувач вводить "Адмін",
//то prompt запитує пароль.
//Якщо нічого не ввели або натиснута клавіша відміна
//Вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
//Якщо введено пароль "Я головний",
//то вивести рядок "Добрий день!"
// Якщо відвідувач натиснув відміна виводити рядок 'скасовано'
//інакше виводити рядок "Невірний пароль!"

// const userInputLogin = prompt("Введіть логін");
// let userInputPass;
// if (userInputLogin === "Адмін") {
//     if ((userInputPass = prompt("Введіть пароль")) === "Я головний") {
//         alert("Добрий день!");
//     } else if (userInputPass === null) {
//         alert("скасовано");
//     } else {
//         alert("Невірний пароль!");
//     }
// } else {
//     alert("Я вас не знаю");
// }


//TODO: 9 ===================================
// При завантаженні сторінки користувачеві пропонується
// в prompt ввести число. Введення додається до значення
// змінної total.
// Операція введення числа триває до того часу,
// поки користувач не натисне кнопку Cancel в prompt.
// Після того, як користувач припинив введення натиснувши на
// кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
// Робити перевірку,що користувач ввів саме число,
// а не довільний набір символів, не потрібно.

// let total = 0;
// let userInput = null;

// do {
//     userInput = prompt("Введіть число");
//     if (userInput === null) {
//         break;
//     }
//     userInput = parseFloat(userInput);
// } while (total += userInput);

// alert(`Загальна сума введених чисел дорівнює ${total}.`);

//TODO: 10 ===================================
// Напишіть цикл, який пропонує ввести
// число більше 100 через prompt.
// Якщо відвідувач ввів інше число - попросити
// ввести ще раз і так далі.
// Цикл має питати число, поки відвідувач не
// введе число більше 100, або натисне кнопку
// скасування в prompt

let userInput = null;

do {
    userInput = Number.parseFloat(prompt("Введіть число більше 100"));
} while (userInput <= 100);

alert(userInput);