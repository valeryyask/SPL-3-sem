const nestedArray = [1, [2, [3, 4], 5], [6, 7]];

function sumArray(arr) {
    return arr.reduce((sum, el) => sum + (Array.isArray(el) ? sumArray(el) : el), 0);
}

console.log(sumArray(nestedArray)); // 28
