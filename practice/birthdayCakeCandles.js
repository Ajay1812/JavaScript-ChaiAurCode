let candles = [3, 2, 1, 3]
// function birthdayCakeCandles(candles) {
//     let arr = []
//     let c = 1
//     for (let i = 0; i< candles.length; i++){
//         if (arr.includes(candles[i])){
//             c += 1 
//         }
//         else{
//             arr.push(candles[i])
//         }
//     }
//     return c
// }

// console.log(birthdayCakeCandles(candles))


function birthdayCakeCandles(candles) {
    let tallestCandle = candles.sort().reverse()[0]
    let count = 0
    for (let i =0; i< candles.length;i++){
        if (candles[i] == tallestCandle){
            count+=1
        }
    }
    return count
}
console.log(birthdayCakeCandles(candles))

// let count = 0
//     let max = Math.max(...candles)
//    candles.forEach((e)=>{
//       if(e == max)
//       {
//          count++
//       } 
//    }) 
//   return count