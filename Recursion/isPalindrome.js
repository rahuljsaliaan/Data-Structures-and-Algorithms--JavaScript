function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1]; // important, as after 2 characters there will be zero characters which is invalid
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1)); // if it is not equal then you can consider that it is not a palindrome
  return false;
}

console.log(isPalindrome("aboba"));

/* 
  CALL STACK:
  isPalindrome("aboba");
          isPalindrome("bob");
                  isPalindrome("o");
*/
