// EQOBJECTS: takes in two objects and returns true or false based on a perfect match

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

module.exports = eqObjects;


