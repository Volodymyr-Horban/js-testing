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

const max = 43;
const min = 28;

let binateSum = 0;

for (let i = max; i >= min; i -= 1) {
    console.log(i);
    if (i % 2 === 0) {
        binateSum += i;
    }
}
console.log(binateSum);