const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🥰🥰🥰 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🤢🤢🤢 Assertion Failed: ${actual} !== ${expected}`);
  }
};


//returns first key which contains the given value otherwise undefined

const findKeyByValue = function(object, value) {
  const keys = Object.keys(object);
  let result;
  for (let i of keys) {
    if (object[i] === value) {
      result = i;
    }
  }
  return result;
};

//test case
const letters = {
  A: "ONE",
  B: "TWO",
  C:  "THREE"
};


console.log(findKeyByValue(letters, "ONE"));
assertEqual(findKeyByValue(letters, "ONE"), "A");
assertEqual(findKeyByValue(letters, "ONE"), undefined);

module.exports = findKeybyValue;
