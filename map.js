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

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


// //TEST MAP
// const results1 = map(words, word => word[0]);
// console.log(results1);

// const results2 = map(words, word => word[1]);
// console.log(results2);

// const results3 = map(words, word => word.toUpperCase(word));
// console.log(results3);

//TEST ASSERTARRAYSEQUAL
module.exports = map;
