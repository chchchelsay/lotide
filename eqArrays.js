const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🥰🥰🥰 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🤪🤪🤪 Assertion Failed: ${actual} !== ${expected}`);
  }
};


//eqArrays compares arrays to see if they are exactly the same. It checks for matching length and checks every value in the arrays.
const eqArrays = function(array1, array2) {
  if  ((array1.length === array2.length) &&
        array1.every((val, i) => val === array2[i])) {
    return true;
  } else {
    return false;
  }
};

//TEST CODE FROM COMPASS
eqArrays([1, 2, 3], [1, 2, 3]);
eqArrays([1, 2, 3], [3, 2, 1]);
eqArrays(["1", "2", "3"], ["1", "2", "3"]);
eqArrays(["1", "2", "3"], ["1", "2", 3]);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]));
  




/* THIS WORKS MOSTLY but doesn't check exact values i.e. if string vs number

const eqArrays = function(array1, array2) {

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    } else if (array1.length !== array2.length) {
      return false;
    } else if (array1[i] === array2[i]) {
      return true;
    } else {
      return false;
    }
  }
}; */