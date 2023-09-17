function averagePair(numArr, target) {
  if (numArr.length <= 1) return false;

  let start = 0;
  let end = numArr.length - 1;

  while (start < end) {
    const avg = (numArr[start] + numArr[end]) / 2;

    if (avg > target) {
      end--;
      continue;
    }

    if (avg < target) {
      start++;
      continue;
    }

    return true;
  }

  return false;
}

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
