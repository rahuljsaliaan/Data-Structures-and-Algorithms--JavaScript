function naiveStringSearch(string, pattern) {
  count = 0;
  for (i = 0; i < string.length; i++) {
    for (j = 0; j < pattern.length; j++) {
      if (string[i + j] !== pattern[j]) break;

      if (j === pattern.length - 1) {
        count++;
      }
    }
  }

  return count;
}

console.log(naiveStringSearch("Rahul Jackson Jack", "Jack"));
