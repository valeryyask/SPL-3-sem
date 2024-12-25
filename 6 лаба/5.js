function sumValues(a, b, c) {
    return a + b + c;
  }
  const numbers = [1, 2, 3];
  const result = sumValues(...numbers);
  console.log(result); // 6
  