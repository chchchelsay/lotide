const eqObjects = require('./eqObjects');

//ASSERTOBJECTSEQUAL: takes in and compares two objects, then logs appropriate message to console.

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;  
const isObjectEqual =  eqObjects(actual, expected); 

if (isObjectEqual) {
      console.log(`🥰🥰🥰 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    } else {
      console.log(`🤢🤢🤢 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
  };


module.exports = assertObjectsEqual;
