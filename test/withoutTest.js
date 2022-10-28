const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const without = require('../without');

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 

assertArraysEqual((eqArrays)(words, ["hello", "world", "lighthouse"]));