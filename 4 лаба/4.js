// Создаем WeakMap для кэширования
const cache = new WeakMap();

// Пример функции, результаты которой будем кэшировать (например, вычисление факториала)
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

// Функция с кэшированием
function cachedFactorial(n) {
    if (cache.has(n)) {
        console.log("Результат взят из кэша");
        return cache.get(n);
    } else {
        let result = factorial(n);
        cache.set(n, result);
        console.log("Результат сохранен в кэш");
        return result;
    }
}

// Пример использования
console.log(cachedFactorial(5)); // Результат сохранен в кэш
console.log(cachedFactorial(5)); // Результат взят из кэша
