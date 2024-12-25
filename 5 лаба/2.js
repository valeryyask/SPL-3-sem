function volume(length) {
    return function(width) {
        return function(height) {
            return length * width * height;
        };
    };
}

// Используем каррированную функцию
let volumeWithFixedLength = volume(10);
let calculateVolume = volumeWithFixedLength(5);

console.log(calculateVolume(2)); // 100
console.log(calculateVolume(3)); // 150
