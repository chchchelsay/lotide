const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🥰🥰🥰 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🤢🤢🤢 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//takes in a string of letters (sentence) & returns count of each of the letters

const countLetters = function(string) {
  const numLetter = {};
  for (const i of string) {
    numLetter[i] = numLetter[i] ? numLetter[i] + 1 : 1;
  }
  return numLetter;
};




// //TEST CASES

// //countLetters("lighthouse in the house");
// //l: 1, i: 2, g: 1, h: 4, t: 2, …}

// console.log(countLetters('TEST'));

// /*const slogan = ("lighthouse in the house");
// const numLetter= countLetters(slogan);
// assertEqual(numLetter["h"], 4);
// */

module.exports = countLetters;
