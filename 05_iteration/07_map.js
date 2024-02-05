const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newArr = myNums.map( (item) => {
//     return item + 10
// } )

// console.log(newArr)

// const newArr =  myNums.forEach( (num)=>{ 
//     return num + 10
// } )

// console.log(newArr) // forEach will not return anything


// ------------------- Chaining 

const newStrNum = myNums
                    .map( (item) => (item * 2 ))
                    .map((item) => (item + 1))
                    .filter( (item)=> (item>8))
                    .join("") // join in string

console.log(newStrNum)