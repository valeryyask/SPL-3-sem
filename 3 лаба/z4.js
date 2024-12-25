const str = 'ABC';

function asciiTransform(s) {
    let total1 = s.split('').map(char => char.charCodeAt(0)).join('');
    let total2 = total1.replace(/7/g, '1');
    return total1 - total2;
}

console.log(asciiTransform(str)); // 6
