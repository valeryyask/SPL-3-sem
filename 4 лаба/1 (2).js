// Создаем Set для хранения товаров
let products = new Set();

// Функция добавления товара
function addProduct(product) {
    products.add(product);
}

// Функция удаления товара
function removeProduct(product) {
    products.delete(product);
}

// Функция проверки наличия товара
function hasProduct(product) {
    return products.has(product);
}

// Функция для получения количества товаров
function countProducts() {
    return products.size;
}

addProduct("Молоко");
addProduct("Хлеб");
console.log(hasProduct("Молоко")); // true
console.log(countProducts()); // 2
removeProduct("Молоко");
console.log(countProducts()); // 1
