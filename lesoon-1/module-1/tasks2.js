//TODO: 1 ===================================
// Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно'.

// const a = Number(prompt('Enter your number'));
// a === 10 ? alert('Вірно') : alert('Невірно');

//TODO: 2 ===================================
// У змінній min лежить число від 0 до 59. Визначте у котру чверть години
// Попадає це число (у першу, другу, третю або четверту).

const min = prompt('Enter minute');
console.log(min);

if (min > 0 && min < 15) {
    alert('First quarter');
} else if (min >= 15 && min < 30) {
    alert('Second quarter');
} else if (min >= 30 && min < 45) {
    alert('Third quarter');
} else if (min >= 45 && min <= 59) {
    alert('Fourth quarter');
} else {
    alert('Enter correct minute');
}