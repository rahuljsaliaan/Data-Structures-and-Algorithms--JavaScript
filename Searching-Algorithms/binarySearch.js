const sortedStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

// Binary Search
const binarySearchString = (array, key) => {
  let left = 0;
  let right = array.length - 1;

  // NOTE: This is done because the array is sorted and when left > right, it means that the key is not present in the array
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const string = array[mid];

    if (key === string) return mid;

    key.localeCompare(string) > 0 ? (left = mid + 1) : (right = mid - 1);
  }

  return -1;
};

console.log(binarySearchString(sortedStates, "Karnataka"));

const binarySearchNumber = (array, key) => {
  let left = 0;
  let right = array.length - 1;

  // NOTE: This is done because the array is sorted and when left > right, it means that the key is not present in the array
  while (left <= right) {
    // NOTE: It if better to use floor or ceil instead of round for potential problems (rare case)
    const mid = Math.floor((left + right) / 2);
    const int = array[mid];

    if (key === int) return mid;

    key > int ? (left = mid + 1) : (right = mid - 1);
  }

  return -1;
};

console.log(binarySearchNumber([1, 2, 3, 4, 5], 2));
