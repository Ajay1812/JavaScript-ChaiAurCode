// let order = [10, 30];
// let n_order = 2;
// let widgetsK = 40;
let order = [5, 4, 6];
let n_order = 3;
let widgetsK = 3;

// function filledOrders(order, k) {
//   let countOrderFullFill = 0;
//   let sum = 0;
//   for (let i = 0; i < order.length; i++) {
//     sum += order[i];
//   }
//   for (let j = 0; j < order.length; j++) {
//     // console.log(sum);
//     if (sum <= k) {
//       countOrderFullFill += 1;
//     } else {
//       countOrderFullFill += 0;
//     }
//   }
//   return countOrderFullFill;
// }

function filledOrders(order, k) {
  let countOrderFullFill = 0;
  for (let i = 0; i < order.sort().length; i++) {
    if (order[i] <= k) {
      countOrderFullFill += 1;
      k -= order[i];
    } else {
      break;
    }
  }
  return countOrderFullFill;
}

// console.log(filledOrders([10, 20], 40));
console.log(filledOrders([5, 4, 6], 3));
