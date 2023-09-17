const addNNumbers = function (n) {
  return (n * (n + 1)) / 2;
};

const t1 = performance.now();

addNNumbers();

const t2 = performance.now();

console.log((t2 - t1) / 1000);
