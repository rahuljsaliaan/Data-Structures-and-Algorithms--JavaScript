/**
 * function to count unique values
 * @param {Array} sorted array of numbers
 * @returns {Number} count of unique values in the array
 */
const countUniqueValues = function (arr) {
  if (arr.length === 0) return 0;

  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) arr[++i] = arr[j];
  }

  return i + 1;
};

console.log(countUniqueValues([1, 1, 2, 3, 3, 4, 5, 6, 6, 7])); // output: 7
console.log(countUniqueValues([])); // output: 0
console.log(countUniqueValues([2])); // output: 1

// inputs: [2,3,4,5,6] output: 5
// inputs: [2,3,4,5,6,6,8,8,8] output: 6

// * my solution
const countUniqueValues2 = function (numArr) {
  if (!numArr.length) return 0;
  if (numArr.length === 1) return 1;

  let first = 0;
  let second = 1;

  while (second < numArr.length) {
    if (numArr[first] === numArr[second]) {
      second++;
      continue;
    }

    first++;
    numArr[first] = numArr[second];
  }

  return ++first;
};

// console.log(countUniqueValues2([2, 3, 4, 5, 5]));
// console.log(countUniqueValues2([2, 3, 4, 5, 6, 6, 8, 8, 8, 8, 8])); // 2,3,4,5,6,8
// console.log(countUniqueValues2([2, 3, 4, 5, 6]));
