//TEST ASSERTION FUNCTIONS

//eqArrays
const eqArrays = function(array1, array2) {
  if  ((array1.length === array2.length) &&
        array1.every((val, i) => val === array2[i])) {
    return true;
  } else {
    return false;
  }
};

//assertArraysEqual
const assertArraysEqual = function(eqArrays, array1, array2) {
  if (eqArrays === true) {
    console.log("These are equal!");
  } else if (eqArrays === false) {
    console.log("Not a match!");
  }
};


//middle
const middle = function(array) {

  for (let i = 0; i < array.length; i++) {
    let centre = [];
    let x = (array.length);
    let y = (x / 2);

    if (x <= 2) {
      centre = [];
      return centre;
    } else if (x % 2 !== 0) {
      centre = (array[Math.floor(y)]);
      return centre;
    } else
      (x % 2 === 0); {
      centre = (array.slice(y - 1 , y + 1));
      return centre;
    }
  }
};

/* middle(); TEST CASES
middle([1]);
middle([1, 2]);
middle([1, 2, 3]);
middle([1, 2, 3, 4, 5]);
middle([1, 2, 3, 4]);
middle([1, 2, 3, 4, 5, 6]);

*/