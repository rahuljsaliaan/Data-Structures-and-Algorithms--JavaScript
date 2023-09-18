/*
  input: 4 
  output: 24
*/

function factorial(num) {
  if (num === 1) return 1;

  return num * factorial(num - 1);
}

console.log(factorial(4));
