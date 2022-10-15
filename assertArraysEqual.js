const eqArrays = require('./eqArrays');

//assertArraysEqual works similarly to eqArrays but console.logs statements instead of returning true/false

const assertArraysEqual = function(eqArrays) {
  if (eqArrays === true) {
    console.log("These are equal!");
  } else if (eqArrays === false) {
    console.log("Not a match!");
  }
};

module.exports = assertArraysEqual;
