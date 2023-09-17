function averagePair(numArr, target) {
  if (!numArr.length) return false;

  let start = 0;
  let next = 1;

  while (next < numArr.length) {
    if ((numArr[start] + numArr[next]) / 2 === target) return true;

    start++;
    next++;
  }

  return false;
}