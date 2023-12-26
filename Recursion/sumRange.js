/*
  input: 4
  output: 10
*/

function sumRange(num) {
  if (num === 1) return 1;

  return num + sumRange(num - 1);
}

console.log(sumRange(3));
