// ******************* Primitive DataTypes **********************

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
// const score:Number = 100 -> typescript 
const scoreValue = false
let isLoggedIn = false
let userEmail 

const id = Symbol("123")
const anotherID = Symbol("123")

// console.log(id === anotherID); // false

const bigInt = 234567182387214812n


// ******************* Refernce (Non-Primitve) DataTypes *****************

// Array, Objects, Functions

const heros = ["IRON MAN", "BATMAN", "PERMAN"]

let myObj = {
    name: "Ajay",
    age: 23,
}

const myFunc = function(){
    // console.log(`Hello ${myObj['name']}`);
    let name = myObj['name']
    return name
}
// console.log(myFunc())


// console.log(typeof myFunc)
// console.log(typeof myObj)


//  ++++++++++++++++++++++++++++ Memory +++++++++++++++++++++++++++++++

// Stack (premitive) -> return copy , Heap (non-primitve) -> return refernce

let youtubeName = "NightFury"
let anotherName = youtubeName
anotherName = "CodeNFInite"

console.log(youtubeName);
console.log(anotherName);

let userOne = {
    name: "Ajay",
    email: "a.kumar01c@gmail.com",
    UPI: "6397xsaxa@ybl"
}

let userTwo = userOne

// console.log(userOne);
// console.log(userTwo);

userTwo.email = "rohit.kumar@gmail.com"

console.log(userOne)
console.log(userTwo)