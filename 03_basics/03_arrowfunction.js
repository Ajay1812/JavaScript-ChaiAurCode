const user = {
    username : "Ajay",
    price: 999,
    welcomemessage : function(){
        console.log(`Welcome ${this.username}`)
        console.log(this)
    }

}

// user.welcomemessage()
// // Object.freeze(user)
// user.username = "Rohit"
// user.welcomemessage()

// console.log(this) // if we run in browser it will give window object {} but in node enviroment it will gave empty object {}


// function chai(){
//     let username = "Ajay"
//     console.log(this.username); // will not be able to use this keyword in function it will gave undefined but we can use in object only.
// }

// chai()

// const chai = function(){
//     let username = "Ajay"
//     console.log(this.username); // will not be able to use this keyword in function it will gave undefined but we can use in object only.
// }

// chai()

// +++++++++++++++++++++ Arrow Function -> ES6 ++++++++++++++++++++++

const chai = () => {
    let username = "Ajay"
    console.log(this.username)
}

// chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// const addTwo = (num1,num2) => num1 + num2 // implicit return

// const addTwo = (num1,num2) => (num1 + num2) // implicit return

const addTwo = (num1,num2) => ({username:"Ajay"}) // implicit return object

// console.log(addTwo(100,100))

const myArr = [1,2,3,4,5,6]

const newArr = myArr.map((n)=>(n*2)) // map
console.log(newArr)

myArr.forEach((n)=>console.log(n*2)) // foreach

// NOTE: if we use curly brackets {} in arrow function so we have to use return keyword
//       but if you use round bracket () you dont have to use return in that


