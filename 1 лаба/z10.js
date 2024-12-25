function exampleFunc(param1 = "default", param2, param3) {
    return `${param1}, ${param2}, ${param3}`;
}
let usersparam3 = prompt("Введите третий параметр:");
console.log(exampleFunc("value1", "value2", usersparam3));