function sameFrequency(num1, num2) {
  const num1Frequency = {};
  const num2Frequency = {};

  const num1Arr = String(num1).split("");
  const num2Arr = String(num2).split("");

  if (num1Arr.length !== num2Arr.length) return false;

  num1Arr.forEach((num, i) => {
    num1Frequency[num] = (num1Frequency[num] || 0) + 1;
    num2Frequency[num2Arr[i]] = (num2Frequency[num2Arr[i]] || 0) + 1;
  });

  for (const [key, value] of Object.entries(num1Frequency)) {
    if (!num2Frequency.hasOwnProperty(key) && num2Frequency[key] !== value) {
      return false;
    }
  }

  return true;
}

console.log(sameFrequency(128, 812));
console.log(sameFrequency(118, 811));
