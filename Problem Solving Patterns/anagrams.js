/**
 * Function to check if two strings are anagram or not.
 * @param {String} str1
 * @param {String} str2
 * @returns {boolean}
 */
const anagram = function (str1, str2) {
  if (str1.length !== str2.length) return false;

  const lookup = {};

  for (const char of str1) lookup[char] ? lookup[char]++ : (lookup[char] = 1);

  for (const char of str2) {
    if (!lookup[char]) return false;

    lookup[char]--;
  }

  return true;
};

console.log(anagram("rrahul", "luharr")); // returns true

// My solution
const isAnagram = function (str1, str2) {
  if (str1.length !== str2.length) return false;

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  const newString1 = str1.toLowerCase();
  const newString2 = str2.toLowerCase();

  for (const char of newString1)
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;

  for (const char of newString2)
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;

  for (const key of Object.keys(frequencyCounter1)) {
    if (!frequencyCounter2.hasOwnProperty(key)) return false;

    if (frequencyCounter2[key] !== frequencyCounter1[key]) return false;
  }

  return true;
};

console.log(isAnagram("rrahul", "luharr"));
