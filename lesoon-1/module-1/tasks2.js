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

// const globalMin = prompt('Enter minutes value');
// const hours = Math.floor(globalMin / 60);
// const minutes = Math.floor(globalMin - (hours*60));
// console.log (` ${hours} : ${minutes} `);

//TODO: 7 ===================================
//Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max

// const max = 55;
// const min = 14;
// let total = 0;

// for (let i = max; i >= min; i -= 1) {
//     if (i % 2 === 0) {
//         console.log (i);
//         total += i; 
//     }
// }

// console.log ("Total sum:", total );

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

// const loginInput = prompt ('Input your login');
// console.log (`Login: ${loginInput}`);

// if (loginInput === "Адмін") {
//     const password = prompt ('Input your password');
//     if (password) {
//         if (password === "Я головний") {
//             console.log ('Добрий день!');
//         } else {
//             console.log ('Невірний пароль!');
//         }

//     } else {
//         console.log ('скасовано');
//     }
    
// } else {
//     console.log ('скасовано');
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

let total = 0;
let question = null;

do {
    question = prompt("Ведіть число");

    if (question === null) {
        break;
    }

    question = parseFloat(question);
     
    if (!isNaN(question)) {
        total += question;
    }
} while (true)

alert(`Загальна кількість ведених чисел дорінює ${total}`);