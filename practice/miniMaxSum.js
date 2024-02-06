let arr  = [1,2,3,4,5]

// function miniMaxSum(arr) {
//     arr = arr.sort()
//     let minSum = 0
//     let maxSum = 0
//     for (let i = 0; i < arr.length -1; i++) {
//         minSum += arr[i]
//     }
//     for (let j = 1; j < arr.length; j++) {
//         maxSum += arr[j]
//     }
//     return [minSum,maxSum]
// }

// =============================================================
function miniMaxSum(arr) {
    arr = arr.sort()
    // console.log(arr)
    let MinfirstFour = arr.sort().slice(0,4)
    let MaxlastFour = arr.reverse().slice(0,4)
    // console.log(MinfirstFour, reverseFour)
    let minSum = MinfirstFour.reduce((acc, item)=>(acc+item),0)
    let maxSum = MaxlastFour.reduce((acc, item)=>(acc+item),0)
    console.log(minSum, maxSum)

}

console.log(miniMaxSum(arr))