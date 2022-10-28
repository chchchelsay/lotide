const eqArrays = require('./eqArrays');

//ASSERTARRAYSEQUAL takes in and compares two arrays, then prints an appropriate message based on a perfect match

const assertArraysEqual = function(eqArrays) {
  if (eqArrays === true) {
    console.log("These are equal!");
  } else if (eqArrays === false) {
    console.log("Not a match!");
  }
};

module.exports = assertArraysEqual;
