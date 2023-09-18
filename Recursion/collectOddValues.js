// * Example for helper recursive function
function collectOddValues(numArr) {
  const oddValues = [];

  function helper(helperInput) {
    if (!helperInput.length) return;

    if (helperInput[0] % 2 !== 0) oddValues.push(helperInput[0]);

    helper(helperInput.slice(1));
  }

  helper(numArr);

  return oddValues;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// * Example for pure recursive function
function collectOddValuesPure(numArr) {
  const newArr = [];

  if (!numArr.length) return newArr;

  if (numArr[0] % 2 !== 0) newArr.push(numArr[0]);

  return newArr.concat(collectOddValuesPure(numArr.slice(1)));
}

console.log(collectOddValuesPure([1, 2, 3]));

/* 
  THE CALL STACK
  collectOddValuesPure([1, 2, 3])
            return newArr.concat(collectOddValuesPure([2, 3]))
                        return newArr.concat(collectOddValuesPure([2, 3]))
                                    return newArr.concat(collectOddValuesPure([3]))
                                                return newArr.concat(collectOddValuesPure([]))
*/
