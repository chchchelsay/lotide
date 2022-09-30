const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🥰🥰🥰 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🤪🤪🤪 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(array) {
  console.log(array[0]);

};

//test examples

//head([1,2,3]);
//assertEqual(head([5,6,7]));
//assertEqual(head([]));
