const score = 400
// console.log(score)

const balance = new Number(100) 
// console.log(balance)

// console.log(balance.toString());
// console.log(typeof balance.toString());

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8992
// console.log(otherNumber.toPrecision(4));

const hundreds = 10000000
// console.log(hundreds.toLocaleString("en-IN"));


// ++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++

console.log(Math)
// console.log(Math.abs(-89))
// console.log(Math.round(4.4))
// console.log(Math.ceil(4.3)) // choose top value -> 5
// console.log(Math.floor(4.8)) // choose lower value -> 4
// console.log(Math.max(2,34,4.5,212,32,3)) 
// console.log(Math.min(2,34,4.5,212,32,3)) 

console.log(Math.random());
console.log(Math.floor(Math.random()*10) + 1);


const min = 10
const max = 20

console.log(Math.floor(Math.random(1, 100) * 100) + 1) // generate random value from (1, 100)
console.log(Math.floor(Math.random() * (max - min + 1)) + min)