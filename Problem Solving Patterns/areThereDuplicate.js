// frequency counter solution
function areThereDuplicates(...items) {
  const itemFrequency = {};

  for (const item of items) {
    itemFrequency[item] = (itemFrequency[item] || 0) + 1;
  }

  return (
    (Object.values(itemFrequency).find((value) => value > 1) && true) || false
  );
}

console.log(areThereDuplicates(1, 2, 4, 5));
console.log(areThereDuplicates(1, 2, 5, 5));

// multiple pointers solution
function areThereDuplicatesPointers(...items) {
  items.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  let start = 0;
  let next = 1;

  while (next < items.length) {
    if (items[start] === items[next]) return true;
  }

  return false;
}

// simple linear solution
// * best solution
function areThereDuplicatesLinear(...items) {
  return new Set(items).size !== items.length;
}

console.log(areThereDuplicatesLinear(1, 2, 4, 5));
console.log(areThereDuplicatesLinear(1, 2, 5, 5));
