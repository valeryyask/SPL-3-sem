/*1.*/
console.log('Задание 1');

let person = {
    name: 'John',
    age: 30,

    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    },
    ageAfterYears: function(years) {
        return this.age + years;
    }
};

person.greet(); 
console.log(person.ageAfterYears(22));
  
/*2.*/
console.log('\nЗадание 2');

let car = {
    model: 'Tesla Model S',
    year: 2020,

    getInfo: function() {
        console.log(`Car model: ${this.model}, Year: ${this.year}`);
    }
};
  
car.getInfo();
  
/*3.*/
console.log('\nЗадание 3');

function Book(title, author) {
    this.title = title;
    this.author = author;
  
    this.getTitle = function() {
      return this.title;
    };
  
    this.getAuthor = function() {
      return this.author;
    };
}
  
let myBook = new Book('1984', 'George Orwell');
console.log(myBook.getTitle());
console.log(myBook.getAuthor());
  
/*4.*/
console.log('\nЗадание 4');

let team = {
    players: ['Alice', 'Bob', 'Charlie'],

    showPlayers: function() {
      this.players.forEach(function(player) {
        console.log(player);
      });
    }
};
  
team.showPlayers();
  
/*5.*/ /*this*/
console.log('\nЗадание 5');

const counter = (function() {
    let count = 0;
  
    return {
      increment: function() {
        return ++this.count;
      },
      decrement: function() {
        return --this.count;
      },
      getCount: function() {
        return this.count;
      },
      init: function(){
        this.count = count;
      }
    };
})();
counter.init();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.getCount());
  

/*6.*//*все*/
console.log('\nЗадание 6');

let item = {};
Object.defineProperty(item, 'price', {
    value: 100,
    writable: true,//можно ли изменять значение свойства
    configurable: true,//можно ли изменять конфигурацию свойства
    enumerable: true//будет ли свойство отображаться в циклах
});

console.log(item.price);

Object.defineProperty(item, 'price', {
    writable: false,
    configurable: false,
    enumerable: false
});

item.price = 200;
console.log(item.price);

/*7.*/
console.log('\nЗадание 7');

let circle = {
    radius: 5,

    get area() {
      return Math.PI * this.radius ** 2;
    },
    get getRadius() {
      return this.radius;
    },
    set setRadius(value) {
      this.radius = value;
    }
};
  
console.log(circle.area);
circle.setRadius = 10;
console.log(circle.area);

/*8.*/
console.log('\nЗадание 8');

let car2 = {};
Object.defineProperties(car2, {
    make: { value: 'Tesla', writable: true, configurable: true, enumerable: true },
    model: { value: 'Model X', writable: true, configurable: true, enumerable: true },
    year: { value: 2021, writable: true, configurable: true, enumerable: true }
});

console.log(car2.make); // Tesla

Object.defineProperties(car2, {
    make: { writable: false, configurable: false, enumerable: false },
    model: { writable: false, configurable: false, enumerable: false },
    year: { writable: false, configurable: false, enumerable: false }
});

car2.make = 'BMW'; // Ошибка
console.log(car2.make);

/*9.*/
console.log('\nЗадание 9');

let numbers = [1, 2, 3];
Object.defineProperty(numbers, 'sum', {
    get: function() {
        return this.reduce((acc, val) => acc + val, 0);
    },
    configurable: false,
    enumerable: false,
});

console.log(numbers.sum);

/*10.*/
console.log('\nЗадание 10');

let rectangle = {
    width: 10,
    height: 5,
    get area() {
      return this.width * this.height;
    },
    get getWidth() {
      return this.width;
    },
    set setWidth(value) {
      this.width = value;
    },
    get getHeight() {
      return this.height;
    },
    set setHeight(value) {
      this.height = value;
    }
};
  
console.log(rectangle.area);
rectangle.setWidth = 20;
rectangle.setHeight = 10;
console.log(rectangle.area);

/*11.*/
console.log('\nЗадание 11');

let user = {
    firstName: 'John',
    lastName: 'Doe',

    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    set fullName(name) {
      [this.firstName, this.lastName] = name.split(' ');
    }
};
  
console.log(user.fullName);
user.fullName = 'Jane Smith';
console.log(user.fullName);
  