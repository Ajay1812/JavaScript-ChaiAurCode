function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appleCount = 0;
  let orangeCount = 0;
  for (let i = 0; i < apples.length; i++) {
    if (a + apples[i] >= s && a + apples[i] <= t) {
      appleCount += 1;
    }
  }
  for (let j = 0; j < oranges.length; j++) {
    if (b + oranges[j] >= s && b + oranges[j] <= t) {
      orangeCount += 1;
    }
  }
  // return [appleCount, orangeCount];
  console.log(appleCount);
  console.log(orangeCount);
}

console.log(countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]));
