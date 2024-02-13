arr = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

function diagonalDifference(arr) {
  let rightSum = 0;
  let leftSum = 0;
  for (let i = 0; i < arr.length; i++) {
    leftSum += arr[i][i];
    rightSum += arr[i][arr.length - 1 - i];

    return Math.abs(rightSum - leftSum);
  }
}

console.log(diagonalDifference(arr));
