const { assert } = require("chai");
// MAP takes in an array and a callback function; returns new array based on callback execution

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

module.exports = map;
