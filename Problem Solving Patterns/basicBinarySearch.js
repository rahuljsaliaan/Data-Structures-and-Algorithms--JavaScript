"use strict";

/* 
  Example:  
  input [1,2,3,4,5,6], 3
  output 2
*/

function binarySearch(arr, searchKey) {
  if (arr.length === 0) return null;

  let minIndex = 0;
  let maxIndex = arr.length - 1;

  while (minIndex <= maxIndex) {
    const middle = Math.floor((minIndex + maxIndex) / 2);
    const currentValue = arr[middle];

    if (currentValue > searchKey) {
      minIndex = middle + 1;
      continue;
    }

    if (currentValue < searchKey) {
      maxIndex = middle - 1;
      continue;
    }

    return middle;
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 3));
