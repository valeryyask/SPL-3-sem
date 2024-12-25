// Через объект
let daysObject = {
    1: "понедельник",
    2: "вторник",
    3: "среда",
    4: "четверг",
    5: "пятница",
    6: "суббота",
    7: "воскресенье"
};
let dayNumber = parseInt(prompt("Введите номер дня недели:"));
console.log(daysObject[dayNumber]);
// Через массив
let daysArray = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
console.log(daysArray[dayNumber - 1]);