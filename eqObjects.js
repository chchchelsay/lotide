const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🥰🥰🥰 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🤪🤪🤪 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const eqArrays = function(array1, array2) {
  if  ((array1.length === array2.length) &&
        array1.every((val, i) => val === array2[i])) {
    return true;
  } else {
    return false;
  }
};


const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    const num1 = object1[key];
    const num2 = object2[key];
    const areObjects = isObject(num1) && isObject(num2);
    if (
      areObjects && !eqObjects(num1, num2) ||
      !areObjects && num1 !== num2
    ) {
      return false;
    }
  }
  return true;
};
const isObject = function(object) {
  return object !== null && typeof object === 'object';
};

//TESTS

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); //true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); //false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false


////SHALLOW object EQUALITY

/*
const eqObjects = function(object1, object2) {

  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let i of keys1) {
    if (object1[i] !== object2[i]) {
      return false;
    }
  }
  return true;
};
*/


