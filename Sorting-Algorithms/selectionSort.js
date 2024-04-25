function swap(arr, index1, index2) {
  // es2015 syntax
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];

  return true;
}

function selectionSort(numArr) {
  for (let i = 0; i < numArr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < numArr.length; j++) {
      if (numArr[j] < numArr[min]) {
        min = j;
      }
    }

    if (i !== min) swap(numArr, i, min);
  }
}

const numArr = [2, 5, 6, 4, 3, 8, 7, 10];
selectionSort(numArr);

console.log(numArr);
