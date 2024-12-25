// Map для хранения товаров
let cart = new Map();

// Функция добавления товара
function addProductToCart(id, name, quantity, price) {
    cart.set(id, {name, quantity, price});
}

// Функция удаления товара по id
function removeProductById(id) {
    cart.delete(id);
}

// Функция удаления товаров по названию
function removeProductsByName(name) {
    for (let [id, product] of cart) {
        if (product.name === name) {
            cart.delete(id);
        }
    }
}

// Функция изменения количества товара
function updateProductQuantity(id, newQuantity) {
    if (cart.has(id)) {
        let product = cart.get(id);
        product.quantity = newQuantity;
    }
}

// Функция изменения стоимости товара
function updateProductPrice(id, newPrice) {
    if (cart.has(id)) {
        let product = cart.get(id);
        product.price = newPrice;
    }
}

// Функция для расчета общего количества товаров и их стоимости
function calculateTotal() {
    let totalQuantity = 0;
    let totalPrice = 0;
    for (let product of cart.values()) {
        totalQuantity += product.quantity;
        totalPrice += product.quantity * product.price;
    }
    return { totalQuantity, totalPrice };
}

addProductToCart(1, "Телефон", 2, 1000);
addProductToCart(2, "Ноутбук", 1, 2000);
updateProductQuantity(1, 3); // Изменение количества товара
updateProductPrice(2, 1800); // Изменение стоимости товара

console.log(calculateTotal()); // { totalQuantity: 4, totalPrice: 5400 }
