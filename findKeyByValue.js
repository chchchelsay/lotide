// FINDKEYBYVALUE: takes in an object and specified values; returns first key which contains the given value; otherwise returns undefined

const findKeyByValue = function(object, value) {
  const keys = Object.keys(object);
  let result;
  for (let i of keys) {
    if (object[i] === value) {
      result = i;
    }
  }
  return result;
};

module.exports = findKeyByValue;
