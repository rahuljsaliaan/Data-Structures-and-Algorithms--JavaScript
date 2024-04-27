const numArrGenerator = require("../utils/numArrayGenerator");

function swap(arr, index1, index2) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

function pivot(arr, start = 0, end = arr.length - 1) {
  let pivotValue = arr[start];
  let pivotIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivotValue > arr[i]) {
      swap(arr, ++pivotIdx, i);
    }
  }

  swap(arr, start, pivotIdx);

  return pivotIdx;
}

const numArr = numArrGenerator(10);

// NOTE: The advantage of using quick sort is not creating new array and just passing the left and the right index to sort based on pivot function

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return arr;

  const pivotIdx = pivot(arr, left, right);

  // NOTE: We do not use the pivot index because it's already sorted
  // left
  quickSort(arr, left, pivotIdx - 1);

  // right
  quickSort(arr, pivotIdx + 1, right);
}

quickSort(numArr);

console.log(numArr);
