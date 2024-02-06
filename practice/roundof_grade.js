let grades =[73,67,38, 33]

// let newArr = []
// function functionRoundof(grades){
//     for(let i = 0; i<grades.length;i++){
//         if(((Math.ceil(grades[i]/5) * 5) - grades[i] <= 2) && (grades[i]>=38)){
//             newArr.push(Math.ceil(grades[i]/5) * 5)
//         }
//         else{
//             newArr.push(grades[i])
//         }
//     }
//     return newArr
// }

// console.log(functionRoundof(grades))

// ================================================================

let newArr = []
for (let i=0; i< grades.length;i++){
    let rem = grades[i]%5
    if(grades[i]>=38 && (5-rem)<=2){
        newArr.push(grades[i]+5-rem)
    }
    else{
        newArr.push(grades[i])
    }
}
console.log(newArr)