function minSubArrayLen(numArray, sum) {
  if (!numArray.length) return 0;

  let total = 0;
  let start = 0;
  let end = 0;
  let minLength = Infinity;

  while (start < numArray.length) {
    if (total < sum && end < numArray.length) {
      total += numArray[end];
      end++; // window increases
      continue;
    }

    // test case 1 satisfies (the total should be greater or equal to sum)
    if (total >= sum) {
      // text case 2 satisfies (the min number of elements that adds up to the sum or greater than the sum)
      minLength = Math.min(minLength, end - start);
      total -= numArray[start];
      start++; // window decreases
      continue;
    }

    break;
  }

  return minLength === Infinity ? 0 : minLength;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95));
