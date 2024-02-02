// Singleton

// Object literals
// Object.create // Constructor method

const mySym = Symbol("key1")

const jsUser = {
    name : "Ajay",
    "full name" : "Ajay Kumar",
    [mySym] : "Hello", // ?
    age : 23,
    location : "Mathura",
    email : "a.kumar01c@gmail.com",
    isloggedIn : false,
    lastLogginDays : ["Monday","Saturday"]
}

// console.log(jsUser.email)
// console.log(jsUser['email'])
// console.log(jsUser["full name"])
// console.log(typeof jsUser[mySym])

jsUser['email'] = "ajay.kumar100@gmail.com"
// Object.freeze(jsUser)
jsUser['email'] = "r.kumar@qwerty.com"

// console.log(jsUser)

jsUser['greeting'] = function(){
    console.log(`Hello, ${jsUser['name']}`)
}

jsUser['greetingTwo'] = function(){
    console.log(`Hello, ${this.name}`)
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());