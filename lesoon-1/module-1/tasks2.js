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

const min = Number(prompt('Enter your number'));

if (min >0 && min <= 15) {
    alert('First quarter')
} else if (min >16 && min <= 30) {
    alert('Second quarter')
} else if (min >31 && min <= 45) {
    alert('Third quarter')
} else if (min > 45 && min < 60 || min === 0) {
    alert('Fourth quarter')
} else {
    alert('Enter a different number')
}