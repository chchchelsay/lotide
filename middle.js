const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

//MIDDLE takes in an array and returns the middle-most element(s) of the given array.

const middle = function(array) {

  for (let i = 0; i < array.length; i++) {
    let centre = [];
    let x = (array.length);
    let y = (x / 2);

    if (x <= 2) {
      centre = [];
      return centre;
    } else if (x % 2 !== 0) {
      centre.push(array[Math.floor(y)]);
      return centre;
    } else
      (x % 2 === 0); {
      centre = (array.slice(y - 1 , y + 1));
      return centre;
    }
  }
};

module.exports = middle;