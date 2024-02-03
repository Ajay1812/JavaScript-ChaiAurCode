// const userEmail = "a@gmail.com" // true value
// const userEmail = "" // false value

const userEmail = [] // truethy value

if (userEmail) {
    console.log("Got user's email.")
} else{
    console.log("Dont have user email.")
}

// falsy values
// false, 0, -0, "", (BigInt 0n), null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0){
//     console.log("Array is empty")
// }

// const emptyObj = {}
// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty")
// }

// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15  
val1 = null ?? 10 ?? 20


console.log((val1));

// Ternary operator 
// condtion ? true : false

const iceTeaPrice = 100
iceTeaPrice < 80 ? console.log("Less than 80") : console.log("More than 80")