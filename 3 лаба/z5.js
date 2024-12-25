function extend(...objects) {
    return objects.reduce((acc, obj) => Object.assign(acc, obj), {});
}

console.log(extend({a: 1, b: 2}, {c: 3})); // {a: 1, b: 2, c: 3}
console.log(extend({a: 1, b: 2}, {c: 3}, {d: 4})); // {a: 1, b: 2, c: 3, d: 4}
console.log(extend({a: 1, b: 2}, {a: 3, c: 3})); // {a: 3, b: 2, c: 3}
