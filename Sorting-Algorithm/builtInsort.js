const arrString = ["rahul", "pavan", "deexi"];

console.log(arrString.sort());

const arrNumber = [1, 4, 3, 5, 6, 7, 18, 9];

// Ascending order
console.log(arrNumber.sort((a, b) => a - b));

// Descending order
console.log(arrNumber.sort((a, b) => b - a));
