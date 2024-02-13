let a = [1, 2, 3, 4, 3, 2, 1];

// let unique = 0;
// for (let i = 0; i < a.length; i++) {
//   unique ^= a[i]; // ^ - XOR operator -> XOR gives a logical value of 1 when both the inputs are different
// }
// console.log(unique);

// function lonelyinteger(a) {
//   let unique = 0;
//   for (let i = 0; i < a.length; i++) {
//     unique ^= a[i];
//   }
//   return unique;
// }

// console.log(lonelyinteger(a));

function lonelyinteger(a) {
  let count = {};
  for (let num of a) {
    if (count[num]) {
      count[num]++;
    } else {
      count[num] = 1;
    }
  }
  for (const num in count) {
    if (count[num] == 1) {
      lonely = parseInt(num);
      break;
    }
  }
  return lonely;
}

console.log(lonelyinteger(a));
