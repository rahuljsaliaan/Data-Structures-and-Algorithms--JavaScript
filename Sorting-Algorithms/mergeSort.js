const numArrayGenerator = require("../utils/numArrayGenerator");

function merge(arr1, arr2) {
  const results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i++]);
      continue;
    }

    results.push(arr2[j++]);
  }

  // Using in built methods
  //   if (i < arr1.length) {
  //     results.push(...arr1.slice(i));
  //   }

  //   if (j < arr2.length) {
  //     results.push(...arr2.slice(j));
  //   }

  // Using while loop
  while (i < arr1.length) {
    results.push(arr1[i++]);
  }

  while (j < arr2.length) {
    results.push(arr1[j++]);
  }

  return results;
}

// Recursive function
function mergeSort(arr) {
  // Base case
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let leftArr = mergeSort(arr.slice(0, mid));
  let rightArr = mergeSort(arr.slice(mid));
  return merge(leftArr, rightArr);
}

const numArr = numArrayGenerator(10000);
console.log(mergeSort(numArr));
