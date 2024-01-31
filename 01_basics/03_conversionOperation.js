// let score = "33abc" // NaN
// let score = undefined // NaN
// let score = null // 0
// let score = false // 0
let score = true // 1


// console.log("score",typeof score)

let scoreInNumber = Number(score)
// console.log("Score in number",scoreInNumber)
// console.log("Type of number",typeof scoreInNumber)


let isLoggedIn = undefined
let booleanISLoggedIn = Boolean(isLoggedIn)
// console.log(booleanISLoggedIn);

// 1 -> true 0 -> false
// "" -> false "ajay" -> true

let someNumber = 33

let stringNumber = String(someNumber)

// console.log(stringNumber);
// console.log(typeof stringNumber);


// ********************************** Operation *******************************

let number = 33
let negNumber = -number
// console.log(negNumber);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**3);
// console.log(2%2);


let str1 = "Hello"
let str2 = " Ajay"
let str3 = str1 + str2

// console.log(str3);


// console.log("1" + 2); // -> 12
// console.log(1 + "2"); // -> 12
// console.log("1" + 2 + 2); // -> 122
// console.log(1 + 2 + "2"); // -> 32

// console.log( (3+4) * 5 % 2 );

// console.log(true); // -> true
// console.log(+true); // -> 1 (conversion)
// console.log(+""); // -> 0 (conversion)


let num1, num2, num3

num1 = num2 = num3 = 4


let gameCounter = 100

// gameCounter++ // -> postfix
// ++gameCounter // -> prefix
// console.log(gameCounter);

let x = 3
const y = x++
// console.log(`x:${x}, y:${y} `) // -> x:4, y:3 

let a = 3;
const b = ++a;
console.log(`a:${a}, b:${b} `) // -> a:4, b:4 