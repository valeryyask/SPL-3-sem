let sumOfCubes = function (n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i ** 3; // куб числа i
    }
    return sum;
}

console.log(sumOfCubes(3)); // 1^3 + 2^3 + 3^3 = 36
