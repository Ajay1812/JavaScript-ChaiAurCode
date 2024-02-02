//  ++++++++++++++++++++ Array +++++++++++++++++++++++++++
// storing a collection of multiple items into single vairable called array represented by []

const myArr = [0,1,2,3,4,5]
const myHeros = ["IRON-MAN", "Superman", "Spider-Man"]


const myArr2 = new Array(1,2,3,4,5)

// console.log(myHeros[0]);


// +++++++++++ Array Method+++++++++++

// myArr.push(6)
// myArr.push(7)
// myArr.pop() // remove last value from the array

// myArr.unshift(10) // it insert an element at 0 index and shift other elements to the right
// output : [ 10, 0, 1, 2,
//            3, 4, 5 ]

// myArr.shift() // remove the first element from the array
// output : [1, 2, 3, 4, 5 ]

// console.log(myArr);
// console.log(myArr.includes(9)) // type - boolean
// console.log(myArr.indexOf(4)) 


// const newArr = myArr.join() // return string

// console.log(myArr);
// console.log(typeof newArr);

// ++++++++++++ Slice & Splice  +++++++++++++

console.log("Original Array [A]: ", myArr);
const myN1 = myArr.slice(1,3) // include 1st, 2nd but exclude 3rd index 

console.log("Slice operation : ", myN1);
console.log("After Slice [B]: ", myArr); // Slice can not alter the original array

// Splice
const myN2 = myArr.splice(1,3) // include 1st to 3rd index and remove it from the original array

console.log("Splice operation : ", myN2);
console.log("After Splice [C]: ", myArr); // Splice can change in original array

// OUTPUT : Original Array [A]:  [ 0, 1, 2, 3, 4, 5 ]
//          Slice operation :  [ 1, 2 ]
//          After Slice [B]:  [ 0, 1, 2, 3, 4, 5 ]
//          Splice operation :  [ 1, 2, 3 ]
//          After Splice [C]:  [ 0, 4, 5 ]