// * Write the function which takes in a string and returns counts of each character in a string

// ? Simple examples
// charCount("aaaa") {a:4}
// charCount("aaaa") {a:4, b:0, d:0....}
// charCount("hello") {h:1, e:1, l:2, o:1}

// ? Complex examples
// "My phone number is 182748"
// "Hello hi"

// ? Examples with empty input
// charCount("") // undefined, some message, null, throwError...etc

// ? Examples with invalid input
// charCount("$%#@") // throwError, some message, undefined, null...etc

// * My Solution
// const charCount = function (string) {
//   const charCountObj = {};

//   for (char of string) {
//     if (!charCountObj[char]) charCountObj[char] = 0;
//     charCountObj[char]++;
//   }

//   return charCountObj;
// };

// console.log(charCount("Rahul"));
