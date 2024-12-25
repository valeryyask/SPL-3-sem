let averageArray = (arr) => {
    if (arr.length === 0) return 0;
    let sum = arr.reduce((acc, num) => acc + num, 0); // суммируем все элементы
    return sum / arr.length; // делим сумму на количество элементов
}

console.log(averageArray([1, 2, 3, 4, 5])); // 3
