const numArrGenerator = require("../utils/numArrayGenerator");

const BASE = 10;

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(numArr) {
  let maxDigits = 0;

  for (const num of numArr) {
    maxDigits = Math.max(digitCount(num), maxDigits);
  }

  return maxDigits;
}

// Gets the digit in that position of a number
function getDigit(num, pos) {
  // return Math.floor(Math.abs(num) / Math.pos(BASE, pos)) % BASE;

  return Math.floor(Math.abs(num) / BASE ** pos) % BASE;
}

function radixSort(numArr) {
  const maxDigits = mostDigits(numArr);

  for (let k = 0; k < maxDigits; k++) {
    const digitBuckets = Array.from({ length: BASE }, () => []);
    for (const num of numArr) {
      const digit = getDigit(num, k);
      digitBuckets[digit].push(num);
    }
    numArr = [].concat(...digitBuckets);
  }
}

const numArr = numArrGenerator(10000);

radixSort(numArr);

console.log(numArr);
