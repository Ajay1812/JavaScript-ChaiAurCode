// for

// let num = 10
// for (let i = 1; i<=num ; i++){
//     console.log(i)
// }

// let arr = [1,2,3,4,5,6,7,8]
// for (let i = 0; i< arr.length; i++){
//     console.log(arr[i])
// }


// let num = 5
// for (let i = num; i>0; i--){
//     let pattern = ""
//     for(let j = 0;j<i;j++){
//         pattern +="*"
//     }
//     console.log(pattern)
// }

// for (let i = 1; i <= 10; i++) {
//     // console.log(`Outer Loop ${i}`)
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`Inner Loop ${j} and inner loop ${i}`)
//         console.log(i + "*" + j + "=" + i*j)
//     }
// }

// let myArr = ["Flash","Batman", "Superman"]
// console.log("Array Length: ", myArr.length);
// for (let i = 0; i < myArr.length; i++) {
//     let element = myArr[i];
//     console.log(element);
// }

// break and continue

// for (let i = 1; i <= 20; i++) {
//     if (i == 5){
//         console.log("5 is the best")
//         break
//     }
//     console.log(`value of i is ${i}`)
// }

for (let i = 1; i <= 20; i++) {
    if (i == 5){
        console.log("5 is the best but continue this time")
        continue
    }
    console.log(`value of i is ${i}`)
}