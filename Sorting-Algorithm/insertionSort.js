function swap(arr, index1, index2) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];

  return true;
}

function insertionSort(numArr) {
  for (let i = 1; i < numArr.length; i++) {
    const currentValue = numArr[i];
    let j;

    for (j = i - 1; j >= 0 && numArr[j] > currentValue; j--) {
      numArr[j + 1] = numArr[j];
    }

    if (j !== i) numArr[j + 1] = currentValue;
  }
}

const numArr = [4, 6, 2, 8, 1, 3, 0];
insertionSort(numArr);
console.log(numArr);
