const array1 = [[1, 2], [3, 4]];
const array2 = [[5, [6]], [7, 8]];

const mergedArray = array2.reduce((acc, val) => acc.concat(Array.isArray(val) ? val.flat() : val), []);
console.log(mergedArray); // [1, 2, 3, 4, 5, 6, 7, 8]
