let cache = new WeakMap();

// Функция, которую будем кешировать
function expensiveFunction(param) {
    if (cache.has(param)) {
        return cache.get(param);
    } else {
        let result = param.value * param.value; 
        cache.set(param, result);
        return result;
    }
}

// Создаем объекты с уникальными значениями
let obj1 = { value: 2 };
let obj2 = { value: 3 };
let obj3 = { value: 4 };

console.log(expensiveFunction(obj1)); // Берет данные из кеша: 4
console.log(expensiveFunction(obj2)); // Берет данные из кеша: 9
console.log(expensiveFunction(obj3)); // Берет данные из кеша: 16