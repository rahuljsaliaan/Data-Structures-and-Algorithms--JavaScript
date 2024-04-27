function numArrayGenerator(size, requireNegativeValues = false) {
  return Array.from({ length: size }, () =>
    requireNegativeValues
      ? Math.floor(Math.random() * size * 2) - size
      : Math.floor(Math.random() * size)
  );
}

module.exports = numArrayGenerator;
