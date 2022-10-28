const assert = require('chai').assert;
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');


const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);

const results2 = map(words, word => word[1]);
console.log(results2);

const results3 = map(words, word => word.toUpperCase(word));
console.log(results3);

assertArraysEqual(eqArrays(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]));
