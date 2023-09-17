function charCount(string) {
  // Make object to return at the end
  const result = {};

  // Loop over a string, for each character

  for (let i = 0; i < string.length; i++) {
    const char = string[i].toLowerCase();

    // If char is a alphabet/number and a key in the object, add one to count
    if (result[char] > 0) {
      result++;
      continue;
    }

    // If char is a alphabet/number and not in the object, add it to the object and set value to 1
    if (char.match(/^[0-9a-z]+$/)) result[char] = 1;

    // If char is something else (space, period, etc.), don't do anything
  }

  // Return an object with keys that are lowercase alphanumeric characters in the string; values should the counts for those characters

  return result;
}

console.log(charCount("Rahul"));
console.log(charCount("$rahul57`"));

// * MODIFIED CODE
const charCountV2 = function (str) {
  // Create an empty object
  const charFrequency = {};

  // Iterate through each character of the input string
  for (char of str) {
    // Convert the character into lowercase
    char = char.toLowerCase();

    // Check whether the character is alphanumeric. If not then do nothing
    if (!char.match(/[0-9a-z]/)) continue;

    // Check whether the character already exists inside the charFrequency object. If not assign the char as key and initial value as 0
    // if (!charFrequency[char]) charFrequency[char] = 0;

    // Increment the character count by 1
    // charFrequency[char]++;

    // UPDATED two simple steps into one single line of code
    charFrequency[char] = ++charFrequency[char] || 1;
  }

  // Return the charFrequency Object
  return charFrequency;
};

console.log(charCountV2("Rahul@1233"));
