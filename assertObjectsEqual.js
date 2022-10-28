const eqObjects = require('./eqObjects');

/* ASSERTOBJECTSEQUAL: takes in and compares two objects, then logs appropriate message to console.
*/

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;  
const isObjectEqual =  eqObjects(actual, expected); 

if (isObjectEqual) {
      console.log(`🥰🥰🥰 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    } else {
      console.log(`🤢🤢🤢 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
  };

/* //TEST CASES
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const cd = { a: "8", b: "2" };
const dc = { b: "5", a: "1" };

assertObjectsEqual(ab, ba); 
assertObjectsEqual(cd, dc); 
*/

module.exports = assertObjectsEqual;
