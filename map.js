const { assert } = require("chai");
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// MAP takes in an array and a callback function; returns new array based on callback execution

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


 /* //TEST MAP
const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);

const results2 = map(words, word => word[1]);
console.log(results2);

const results3 = map(words, word => word.toUpperCase(word));
console.log(results3);

assertArraysEqual(eqArrays(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]));
*/

module.exports = map;
