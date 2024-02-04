
// for of

// ["","",""]
// [{},{}]

// const arr = [1,2,3,4,5,6,7]

// for (const num of arr) {
//     console.log(num)
    
// }

// const greeting = "Hello World"

// for (const greet of greeting) {
//     console.log(`Each char in ${greet}`)
    
// }


// Map

const newMap = new Map()
newMap.set("IN","India")
newMap.set("US","United States")
newMap.set("FR","France")
newMap.set("IN","India")

// console.log(newMap)

// for (const [key,val] of newMap) {
//     console.log(`key: ${key}, val: ${val}}`)
    
// }

const myObj = {
    "game1":"nfs",
    "game2": "pop",
    "game3": "cyberpunk"
}

// for (const [key,val] of myObj) {
//     console.log(`key: ${key}, val: ${val}}`) // objects can not iterable for this loop
// }

const fs = require("fs");

function printToScreen() {
  console.log(data, " has been written into the file");
}

let data = "Astala Westa, Tu Baadam Pista";
fs.writeFile("hello.txt", data, "utf-8", printToScreen);