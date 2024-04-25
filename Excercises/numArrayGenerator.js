function numArrayGenerator(size) {
  return Array.from({ length: size }, () => Math.floor(Math.random() * 10));
}

console.log(numArrayGenerator(1000));
