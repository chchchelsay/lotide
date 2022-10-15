const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (
      areObjects && !eqObjects(val1, val2) ||
      !areObjects && val1 !== val2
    ) {
      return false;
    }
  }
  return true;
};
const isObject = function(object) {
  return object !== null && typeof object === 'object'};
  

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;  
const isObjectEqual =  eqObjects(actual, expected); 

if (isObjectEqual) {
      console.log(`🥰🥰🥰 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    } else {
      console.log(`🤢🤢🤢 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
  };

// //TESTING
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };

// assertObjectsEqual(ab, ba); 

module.exports = assertObjectsEqual;
