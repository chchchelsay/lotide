const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const findKeyByValue = require('../findKeyByValue');

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
