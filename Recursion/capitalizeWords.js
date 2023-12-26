function capitalizeWords(arr) {
  if (!arr.length) return;

  return [arr[0].toUpperCase(), ...capitalizeWords(arr.slice(1))];
}

console.log(capitalizeWords(["i", "am", "learning", "recursion"]));

// Other Solution
function capitalizeWords(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length - 1)[0].toUpperCase());
  return res;
}
