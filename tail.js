const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🥰🥰🥰 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🤪🤪🤪 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//function tail returns everything except for the first item (head) of an array - puts into a new array vs changing original.
const tail = function(array) {
  let newArray = array.slice(1);
  console.log(newArray);
};

//test cases

/*const words = ["Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
*/

//tail([1,2,3,4]);
