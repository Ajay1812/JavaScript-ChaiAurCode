// if

// const isUserLoggedIn = true
const temperature = 40

// <, >, >=, <=, ==, !=, ===, !==

// if (2 === 2){
//     console.log("true")
// }

// if (temperature === 40) {
//     console.log("Temperature is lower than 50")
    
// }
// else {
//     console.log("Temperature is greater than 50")
// }


// var -> global

// const score = 200 
// if (score > 100) {
//     const power = "fly"
//     console.log(`User can: ${power}`)
// }
// console.log(`User can: ${power}`) // Error -> power variable not in scope

// const balance = 1000

// if (balance>500) console.log("Greater than 500"); // short notion of if (implicit scope)
// if (balance>500) console.log("Greater than 500"), // not good pratice
// console.log("Yes it greater than");

// if (balance<500) {
//     console.log("greater than 500")}
//     else if (balance< 750){
//         console.log("greater than 750")
//     }else if (balance< 900){
//         console.log("greater than 900")
//     }
//     else{
//     console.log("greater than 1000")
// }

const isUserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// if (isUserLoggedIn && debitCard) {
//     console.log("Allow to buy course")
    
// }

if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged in")
}