// My solution to the problem

const same = function (arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[i] ** 2 === arr2[j]) {
        arr2.splice(j, 1);
        break;
      }
    }
  }

  if (!arr2.length) return true;
  return false;
};

console.log(same([1, 2, 3], [9, 4, 1]));

// Other solution the problem
const same2 = function (arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    let currentIndex = arr2.indexOf(arr1[i] ** 2);
    if (currentIndex === -1) return false;
    arr2.splice(currentIndex);
  }

  return true;
};

console.log(same2([1, 2, 3], [9, 4, 2])); // returns false
