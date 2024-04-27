function numArrayGenerator(size) {
  return Array.from(
    { length: size },
    () => Math.floor(Math.random() * size * 2) - size
  );
}

module.exports = numArrayGenerator;
