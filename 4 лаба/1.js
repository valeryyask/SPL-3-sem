// Создаем коллекцию Set для хранения товаров
const products = new Set();

// Функция для добавления товара
function addProduct(product) {
    products.add(product);
}

// Функция для удаления товара
function removeProduct(product) {
    products.delete(product);
}

// Функция для проверки наличия товара
function hasProduct(product) {
    return products.has(product);
}

// Функция для подсчета количества товаров
function countProducts() {
    return products.size;
}

// Пример использования
addProduct("Laptop");
addProduct("Smartphone");
console.log(hasProduct("Laptop")); // true
removeProduct("Laptop");
console.log(hasProduct("Laptop")); // false
console.log(countProducts()); // 1
