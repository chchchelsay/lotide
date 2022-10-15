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


const without = function(source, itemsToRemove) {
  let newArray = source.filter(i => !itemsToRemove.includes(i));
  console.log(newArray);  

};

// without([1, 2, 3], [1]);

// /* 

// test cases from compass

// without([1, 2, 3], [1]) // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); 

// assertArraysEqual((eqArrays)(words, ["hello", "world", "lighthouse"]));


// */

module.exports = without;

