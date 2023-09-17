"use strict";

/*
  Example:
  -------
  input [2,3,5,1,3,4],3
  output =  10 (2 + 3 + 5)
*/

// Normal Pattern
function maxSum(arr, num) {
  if (arr.length < num) return null;

  let max = -Infinity; // sometimes the sum may result to 0 or any other negative number also.  That is why we use negative infinity as the initial value

  for (let i = 0; i <= arr.length - num; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
      if (temp > max) {
        max = temp;
      }
    }
  }

  return max;
}

console.log(maxSum([2, 3, 5, 1, 3, 4], 3));

// Sliding Window Pattern
function maxSumSlidingWindow(arr, num) {
  if (arr.length < num) return null;

  let tempSum = 0;
  let maxSum = 0;

  // Firstly just loop through the first set of numbers that is from 0 to num and find the sum of those numbers
  for (let i = 0; i < num; i++) maxSum += arr[i];

  tempSum = maxSum;

  for (let i = num; i < arr.length - num; i++) {
    tempSum += arr[i] - arr[i - num];

    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

console.log(maxSumSlidingWindow([2, 3, 5, 1, 3, 4], 3));
