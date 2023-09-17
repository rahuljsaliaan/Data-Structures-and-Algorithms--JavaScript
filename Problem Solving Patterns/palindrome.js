const checkPalindrome = function (str) {
  str = str.toLowerCase();
  let reversedString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }

  return str === reversedString;
};

console.log(checkPalindrome("hello"));
console.log(checkPalindrome("radar"));
