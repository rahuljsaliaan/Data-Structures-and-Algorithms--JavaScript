function swap(arr, index) {
  let temp = arr[index];
  arr[index] = arr[index + 1];
  arr[index + 1] = temp;
}

// Version 1
// function bubbleSort(numArr) {
//   for (let i = 0; i < numArr.length - 1; i++) {
//     for (let j = 0; j < numArr.length - i; j++) {
//       if (numArr[j] > numArr[j + 1]) {
//         swap(numArr, j);
//       }
//     }
//   }
// }

function bubbleSort(numArr) {
  for (let i = numArr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (numArr[j] > numArr[j + 1]) {
        swap(numArr, j);
      }
    }
  }
}

const numArr = [3, 5, 6, 2, 1, 2, 3];

bubbleSort(numArr);

console.log(numArr);
