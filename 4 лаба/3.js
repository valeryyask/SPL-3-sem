// Создаем коллекцию Map для хранения товаров
const cart = new Map();

// Функция для добавления товара
function addProductToCart(id, name, quantity, price) {
    cart.set(id, { name, quantity, price });
}

// Функция для удаления товара по id
function removeProductById(id) {
    cart.delete(id);
}

// Функция для удаления товаров по названию
function removeProductsByName(name) {
    cart.forEach((product, id) => {
        if (product.name === name) {
            cart.delete(id);
        }
    });
}

// Функция для изменения количества товара
function updateQuantity(id, quantity) {
    if (cart.has(id)) {
        let product = cart.get(id);
        product.quantity = quantity;
        cart.set(id, product);
    }
}

// Функция для изменения стоимости товара
function updatePrice(id, price) {
    if (cart.has(id)) {
        let product = cart.get(id);
        product.price = price;
        cart.set(id, product);
    }
}

// Функция для подсчета количества позиций
function getTotalItems() {
    return cart.size;
}

// Функция для расчета общей стоимости товаров
function getTotalCost() {
    let total = 0;
    cart.forEach(product => {
        total += product.quantity * product.price;
    });
    return total;
}

// Пример использования
addProductToCart(1, "Laptop", 2, 1000);
addProductToCart(2, "Smartphone", 5, 500);
updateQuantity(1, 3); // Изменение количества товара
removeProductsByName("Smartphone"); // Удаление товаров с названием Smartphone
console.log(getTotalItems()); // Количество позиций
console.log(getTotalCost()); // Общая стоимость товаров
