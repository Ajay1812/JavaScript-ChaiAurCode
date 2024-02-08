// let arr = [1, 2, 3, 4, 10, 11]

function sumof(arr) {
  // let sum = 0
  for (let i = 0; i < arr.length - 1; i++) {
    // sum += arr[i]
    console.log(arr[i]);
  }
  // return sum
}
// console.log(sumof([1, 2, 3, 4, 10, 11]))

// sumof(arr)

const news = arr.reduce((acc, item) => {
  return acc + item;
}, 0);

// console.log(news)

// let array = [1,2,3] ==>  [0,1,2]

// ========================================================================

// const a = [1, 2, 3]
// const a = [5, 6, 7]
// const a = [17, 28, 30]
// const b = [3, 2, 1]
// const b = [3, 6, 10]
// const b = [99, 16, 8]

let alice = [];
let bob = [];
function tripletComparison(a, b) {
  for (let i = 0; i < 4; i++) {
    let c = 0;
    if (a[i] > b[i]) {
      console.log("Alice award point one");
      c += 1;
      alice.push(c);
    } else if (a[i] < b[i]) {
      console.log("bob award point one");
      c += 1;
      bob.push(c);
    } else {
      console.log("Cancel out each other");
    }
  }
  alice = alice.reduce((acc, item) => acc + item, 0);
  bob = bob.reduce((acc, item) => acc + item, 0);
  return [alice, bob];
}

// console.log(tripletComparison(a,b))

// ========================================================================

const bigArray = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

// console.log(bigArray.reduce((acc,item)=>(acc+item),0))

// ========================================================================

// 1 2 3
// 4 5 6
// 9 8 9

// let arr =  [[1,2,3],
//             [4,6,6],
//             [9,8,9]]
// let arr =  [[1,2,3,4],
//             [5,6,7,8],
//             [9,10,11,12],
//             [13,14,15,16]]

function diagonalDifference(arr) {
  let left = 0;
  let right = 0;
  for (let i = 0; i < arr.length; i++) {
    left += arr[i][i];
    right += arr[i][arr.length - 1 - i];
  }
  return Math.abs(right - left);
}

// console.log(diagonalDifference(arr))

// ========================================================================

let arr1 = [1, 1, -1, -1, 0];

function plusMinus(arr) {
  let pos = 0;
  let neg = 0;
  let zero = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      pos += 1;
    } else if (arr[i] < 0) {
      neg += 1;
    } else {
      zero += 1;
    }
  }
  console.log((pos / arr.length).toFixed(6));
  console.log((neg / arr.length).toFixed(6));
  console.log((zero / arr.length).toFixed(6));
}

// plusMinus(arr1)

// =======================================================================

// let n = 5

function staircase(n) {
  for (let i = n; i > 0; i--) {
    let pattern = "";
    for (let j = 1; j <= n; j++) {
      if (j < i) {
        pattern += " ";
      } else {
        pattern += "#";
      }
    }
    console.log(pattern);
  }
}
// staircase(n)

// for (let i = 0; i < n; i++) {
//     let pattern = ""
//     for (let j = 0; j < n; j++) {
//         if (j<n-i-1){
//             pattern += " "
//         }
//         else{
//             pattern += "*"
//         }
//     }
//     console.log(pattern)
// }

// ====================================================================
// find minMax sum of an array 4/5

function miniMaxSum(arr) {
  let minSum = 0;
  let maxSum = 0;
  for (let i = 0; i < arr.sort().length - 1; i++) {
    minSum += arr[i];
  }
  for (let j = arr.sort().length - 1; j > 0; j--) {
    maxSum += arr[j];
  }
  console.log(minSum, maxSum);
}

//   console.log(miniMaxSum([1, 3, 5, 7, 9]));
