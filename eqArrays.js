const assertEqual = require('./assertEqual');


//eqArrays compares arrays to see if they are exactly the same. It checks for matching length and checks every value in the arrays.
const eqArrays = function(array1, array2) {
  if  ((array1.length === array2.length) &&
        array1.every((val, i) => val === array2[i])) {
    return true;
  } else {
    return false;
  }
};

module.exports = eqArrays;
