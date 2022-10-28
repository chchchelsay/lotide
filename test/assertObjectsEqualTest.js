const assert = require('chai').assert;
const assertObjectsEqual = require('../assertObjectsEqual');
const eqObjects = require('../eqObjects');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const cd = { a: "8", b: "2" };
const dc = { b: "5", a: "1" };

assertObjectsEqual(ab, ba); 
assertObjectsEqual(cd, dc); 

