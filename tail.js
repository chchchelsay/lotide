const assertEqual = require('./assertEqual');


//function tail returns everything except for the first item (head) of an array - puts into a new array vs changing original.
const tail = function(array) {
  let newArray = array.slice(1);
  return newArray;
};

module.exports = tail;
