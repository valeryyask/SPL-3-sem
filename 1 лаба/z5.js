let userName = prompt("Введите имя:");
let teacherName = "Иван Иванов";
if (userName.toLowerCase().includes(teacherName.toLowerCase().split(' ')[0])) {
    alert("Введенные данные верны");
} 
else {
    alert("Имя не совпало");
}