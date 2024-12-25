function arrayDifference(arr1, arr2) {
    return arr1.filter(item => !arr2.includes(item)); // возвращаем элементы arr1, которых нет в arr2
}

console.log(arrayDifference(['a', 'b', 'c'], ['b', 'd'])); // ['a', 'c']
