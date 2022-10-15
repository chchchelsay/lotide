const eqArrays = function(array1, array2) {
  if  ((array1.length === array2.length) &&
        array1.every((val, i) => val === array2[i])) {
    return true;
  } else {
    return false;
  }
};


const assertArraysEqual = function(eqArrays) {
  if (eqArrays === true) {
    console.log("These are equal!");
  } else if (eqArrays === false) {
    console.log("Not a match!");
  }
};


const flatten = function(nestedArray) {

  for (let i of nestedArray) {
    Array.isArray(i);
    if (true) {
      let flatArray = (nestedArray.flat());
      return (flatArray);
    }
  }
};

//TEST CASE
//console.log(flatten([1, 2, [3, 4], 5, [6]]));

module.exports = flatten;
