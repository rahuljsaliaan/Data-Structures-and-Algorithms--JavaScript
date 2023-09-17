function isSubsequence(str1, str2) {
  if (!str1) return false;

  let ptr1 = 0;
  let ptr2 = 0;

  while (ptr2 < str2.length) {
    if (str1[ptr1] === str2[ptr2]) {
      ptr1++;
    }
    if (ptr1 === str1.length) return true; // the ptr 1 crosses the boundary of str1
    ptr2++;
  }

  return false;
}
console.log(isSubsequence("abc", "acb"));
console.log(isSubsequence("abc", "abcd"));
