let russian = true; // true — сдал, false — не сдал
let math = true;
let english = false;
if (russian && math && english) {
    console.log("Перевод на следующий курс");
} 
else if (!russian && !math && !english) {
    console.log("Отчисление");
} 
else {
    console.log("Пересдача");
}