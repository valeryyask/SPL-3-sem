const user = { name: 'John', age: 25 };
const admin = { admin: true, ...user };
console.log(admin); // { admin: true, name: 'John', age: 25 }
