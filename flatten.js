//FLATTEN takes in an array containing elements (including nested arrays of elements), and returns a "flattened" version of the array.

const flatten = function(nestedArray) {

  for (let i of nestedArray) {
    Array.isArray(i);
    if (true) {
      let flatArray = (nestedArray.flat());
      return (flatArray);
    }
  }
};

/* //TEST CASE
console.log(flatten([1, 2, [3, 4], 5, [6]]));
*/
module.exports = flatten;
