const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');
const letterPositions = require('../letterPositions');

console.log(letterPositions("lighthouse in the house"));
console.log(letterPositions("hello"));

assertArraysEqual(eqArrays(letterPositions("hello").e, [1]));
