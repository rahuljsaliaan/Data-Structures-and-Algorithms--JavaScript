function someRecursive(arr, callBack) {
  if (!arr.length) return false;

  return callBack(arr[0]) || someRecursive(arr.slice(1), callBack);
}

console.log(someRecursive([1, 3, 4, 5], (val) => val % 2 === 0)); // output: true
console.log(someRecursive([1, 3, 3, 5], (val) => val % 2 === 0)); // output: false
