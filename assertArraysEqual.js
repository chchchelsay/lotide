const eqArrays = function(array1, array2) {
  if  ((array1.length === array2.length) &&
        array1.every((val, i) => val === array2[i])) {
    return true;
  } else {
    return false;
  }
};

//assertArraysEqual works similarly to eqArrays but console.logs statements instead of returning true/false

const assertArraysEqual = function(eqArrays) {
  if (eqArrays === true) {
    console.log("These are equal!");
  } else if (eqArrays === false) {
    console.log("Not a match!");
  }
};

//test assertions
assertArraysEqual(eqArrays([1,2,3], [1,2,3]));
assertArraysEqual(eqArrays([5,6,7], [5,6,"7"]));