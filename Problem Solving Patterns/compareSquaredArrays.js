const same = function (arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  // Frequency incrementor for arr1
  for (const num of arr1)
    frequencyCounter1[num] = (frequencyCounter1[num] || 0) + 1;

  // Frequency incrementor for arr2
  for (const num of arr2)
    frequencyCounter2[num] = (frequencyCounter2[num] || 0) + 1;

  for (const key of Object.keys(frequencyCounter1)) {
    // if (!frequencyCounter2.hasOwnProperty(key ** 2)) return false;

    // check whether there exists a key in frequencyCounter2 that is equivalent to the squared of key in frequencyCounter1
    // if (!frequencyCounter2[key**2]) return false;

    if (!(key ** 2) in frequencyCounter2) return false;

    if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) return false;
  }

  return true;
};

console.log(same([2, 3, 4], [4, 16, 9]));
console.log(same([2, 3, 4], [8, 16, 10]));
