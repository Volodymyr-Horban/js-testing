//TODO: 1 ===================================
// Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно'.
// const a = Number(prompt('Enter your number'));
// if (a===10) {
//     alert('Вірно')
// }
// else {
//     alert('Невірно')
// }10

//TODO: 2 ===================================
// У змінній min лежить число від 0 до 59. Визначте у котру чверть години
// Попадає це число (у першу, другу, третю або четверту).

// const min = Number(prompt('Enter your number'));

// if (min >0 && min <= 15) {
//     alert('First quarter')
// } else if (min >16 && min <= 30) {
//     alert('Second quarter')
// } else if (min >31 && min <= 45) {
//     alert('Third quarter')
// } else if (min > 45 && min < 60 || min === 0) {
//     alert('Fourth quarter')
// } else {
//     alert('Enter a different number')
// }



//TODO: 3 ===================================
// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

// const num = +prompt('Enter 1 or 2 or 3 or 4');

// switch(num) {
//     case 1:
//         alert('Winter');
//         break;
//     case 2:
//         alert('Spring');
//         break;
//     case 3:
//         alert ('Summer');
//         break;
//     case 4 :
//         alert('Autumn');
//         break;
//     default:
//         alert('Enter a different number');
// }


//TODO: 4 ===================================
// скористаємося циклом while та виведіть у консоль числа від 0 до 50
//  let counter = 0;

//  while (counter <= 50) {
//     console.log (counter);
//     counter += 1;
//  }


//TODO: 5 ===================================
//Використовуючи конструкцію if...else,
//напишіть код, який запитуватиме:
//"Яка офіційна назва JavaScript?"
//Якщо користувач вводить "ECMAScript",
// показати через alert: "Вірно!"
//інакше відобразити: "Не знаєте? ECMAScript!"

// const question = prompt('Яка офіційна назва JavaScript?').toLowerCase();

// if (question === 'ecmascript') {
//     alert ('Вірно!')
// } else {
//     alert ('Не знаєте? ECMAScript!')
// }

//TODO: 6 ===================================
// Напишіть програму, яка отримає від користувача
//число (кількість хвилин) і виведе у консоль
//рядок у форматі годин і хвилин
//70 === 01:10

const globalMin = prompt('Enter minutes value');
const hours = Math.floor(globalMin / 60);
const minutes = Math.floor(globalMin - (hours*60));
console.log (` ${hours} : ${minutes} `);