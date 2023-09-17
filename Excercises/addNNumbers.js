const addNNumbers = function (n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
};

const t1 = performance.now();

// call to the function addNNumbers
addNNumbers(10);

// after calling the function calculate the time
const t2 = performance.now();

console.log((t2 - t1) / 1000); // convert to seconds from milliseconds
