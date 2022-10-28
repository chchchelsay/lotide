// COUNTLETTERS: takes in a string of letters (sentence) & returns count of each letter.

const countLetters = function(string) {
  const numLetter = {};
  for (const i of string) {
    numLetter[i] = numLetter[i] ? numLetter[i] + 1 : 1;
  }
  return numLetter;
};

module.exports = countLetters;
