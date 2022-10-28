const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

//WITHOUT takes in an array and returns a subset of the array without specified elements

const without = function(source, itemsToRemove) {
  let newArray = source.filter(i => !itemsToRemove.includes(i));
  console.log(newArray);  
};

/* // TEST CASE
without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 

assertArraysEqual((eqArrays)(words, ["hello", "world", "lighthouse"]));
*/

module.exports = without;

