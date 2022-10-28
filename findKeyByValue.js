const assertEqual = require('./assertEqual');

// FINDKEYBYVALUE: takes in an object and specified values; returns first key which contains the given value; otherwise returns undefined


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

/*  //TEST CASE
const letters = {
  A: "ONE",
  B: "TWO",
  C:  "THREE"
};

console.log(findKeyByValue(letters, "ONE"));
assertEqual(findKeyByValue(letters, "ONE"), "A");
assertEqual(findKeyByValue(letters, "ONE"), undefined);


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
*/


module.exports = findKeyByValue;
