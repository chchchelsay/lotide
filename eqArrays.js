const assertEqual = require('./assertEqual');

//EQARRAYS compares two arrays and returns true or false based on a perfect match

const eqArrays = function(array1, array2) {
  if  ((array1.length === array2.length) &&
        array1.every((val, i) => val === array2[i])) {
    return true;
  } else {
    return false;
  }
};

module.exports = eqArrays;


