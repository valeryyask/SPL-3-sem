function makeCounter(){
    let currentCount = 1;
    return function() { //*
        return currentCount++;
    };
}

let counter = makeCounter();

alert( counter() ); // 1
alert( counter() ); // 2
alert( counter() ); // 3

let counter2 = makeCounter();
alert( counter2() ); // 1

let currentCount1 = 1;

function makeCounter1(){
    return function(){
        return currentCount1++;
    }
}

let counter3 = makeCounter1();
let counter4 = makeCounter1();

alert( counter3() ); // 1
alert( counter3() ); // 2

alert( counter4() ); // 3
alert( counter4() ); // 4