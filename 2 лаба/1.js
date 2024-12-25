function basicOperation(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 'Invalid operation';
    }
}

let result = basicOperation('+', 5, 10); // result = 15
console.log(result); 