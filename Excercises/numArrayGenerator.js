function numArrayGenerator(size) {
  return Array.from({ length: size }, () => Math.random());
}

module.exports = numArrayGenerator;
