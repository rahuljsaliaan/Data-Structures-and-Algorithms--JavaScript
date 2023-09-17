function maxSubarraySum(numArr, sumLength) {
  if (numArr.length < sumLength) return null;

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < sumLength; i++) {
    maxSum += numArr[i];
  }

  tempSum = maxSum;

  for (let i = sumLength; i < numArr.length; i++) {
    tempSum += numArr[i] - numArr[i - sumLength];

    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2));
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
