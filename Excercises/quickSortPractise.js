const numArrayGenerator = require("../utils/numArrayGenerator");

function swap(arr, index1, index2) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  return true;
}

function pivot(arr, start = 0, end = arr.length - 1) {
  const pivotValue = arr[start];
  let pivotIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivotValue > arr[i]) {
      swap(arr, ++pivotIdx, i);
    }
  }

  swap(arr, start, pivotIdx);

  return pivotIdx;
}

const numArr = numArrayGenerator(10000000);

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return;

  const pivotIdx = pivot(arr, left, right);

  // left
  quickSort(arr, left, pivotIdx - 1);

  // right
  quickSort(arr, pivotIdx + 1, right);
}

quickSort(numArr);

console.log(numArr);
