// My solution
function findLongestSubstring(str) {
  let start = 0;
  let end = 0;
  const characterFrequency = {};
  let longest = 0;

  while (start < str.length) {
    if (!characterFrequency.hasOwnProperty(str[end]) && end < str.length) {
      characterFrequency[str[end]] = (characterFrequency[str[end]] || 0) + 1;
      end++;
      longest = Math.max(Object.keys(characterFrequency).length, longest);
      continue;
    }

    if (start !== end) {
      delete characterFrequency[str[start]];
      start++;
      continue;
    }
  }

  return longest;
}

console.log(findLongestSubstring("rithmschool"));

// Other solution

function findLongestSubstring2(str) {
  if (!str.length) return 0;

  let seen = {};
  let longest = 0;
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (seen[char]) {
      // * Math.max is very important
      start = Math.max(start, seen[char]); // example: "abba" if "a" occurs then the start will be set to 1 which means start is moving backward which should be avoided
    }

    let currentLength = i - start + 1; // adding 1 is important as difference of the index cannot be equalized as length

    longest = Math.max(currentLength, longest);

    seen[char] = i + 1; // store the index + 1 of the character in the seen object (!not the frequency)
  }

  return longest;
}

console.log(findLongestSubstring2("rithmschool"));
