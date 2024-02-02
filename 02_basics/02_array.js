const marvalHeros = ["Hulk","Thor","IRON-MAN"]
const dc = ["Superman","Flash","Batman"]

// marvalHeros.push(dc)

// console.log(marvalHeros.concat(dc))

const allHeros = marvalHeros.concat(dc)
// console.log(allHeros)

const allHeros1 = [...marvalHeros , ...dc]

// console.log(allHeros1)

const newArr = [1,2,3,[4,5,6, [7,8,9],10,11,[12,34,5]]]
const real_newArr = newArr.flat(Infinity)
// console.log(real_newArr)

// console.log(Array.isArray([7,8,9],10,11,[12,34,5]));
// console.log(Array.from("Ajay")); 

// console.log(Array.from({name:"Ajay", name:"Rohit"})) // return empty

let score1 = [100,"ajay"]
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))
console.log(Array.of(score1,score2,score3).flat(Infinity))

