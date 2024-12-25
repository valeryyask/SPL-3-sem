function reverseString(str) {
    let filteredStr = str.replace(/[^a-zA-Z]/g, ''); // убираем неалфавитные символы
    return filteredStr.split('').reverse().join(''); // переворачиваем строку
}

console.log(reverseString('JavaScr53э?ipt')); // tpircSavaJ
