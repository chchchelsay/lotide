//ASSERTEQUAL: takes in and compares two values; prints out appropriate message based on a perfect match

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🥰🥰🥰 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🤢🤢🤢 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;
