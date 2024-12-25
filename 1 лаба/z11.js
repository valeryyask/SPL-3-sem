/** Function Declaration(Объявление функции)
function params(a, b) {
    return a === b ? 4 * a : a * b;
}*/
/**  Function Expression(Функциональное выражение)
const paramsExpression = function(a, b) {
    return a === b ? 4 * a : a * b;
};*/
// Стрелочная функция
const paramsArrow = (a, b) => a === b ? 4 * a : a * b;
console.log(params(5, 5)); // Периметр квадрата
console.log(params(5, 10)); // Площадь прямоугольника