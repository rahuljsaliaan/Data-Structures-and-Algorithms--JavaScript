/**
 * Function that accepts a sorted array of numbers and finds the pair of numbers who's sum is = 0
 * @param {Array} numArray
 * @return {Array} pair of numbers that sums to 0
 */
const sumZero = function (sumArray) {
  const sumArrayCopy = [...new Set(sumArray)].sort((a, b) => a - b);

  let left = 0;
  let right = sumArray.length - 1;

  while (left < right) {
    let sum = sumArrayCopy[left] + sumArrayCopy[right];

    if (sum === 0) return [sumArrayCopy[left], sumArrayCopy[right]];

    if (sum > 0) {
      right--;
      continue;
    }

    left++;
  }

  return [];
};
