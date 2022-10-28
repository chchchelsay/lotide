// TAKEUNTIL takes in an array and a callback; returns a slice of the array with elements from the beginning until callback condition evaluates as true

const takeUntil = function(array, callback) {
 let results = [];

  for (let item of array) {
    if (callback(item)) break; 
    results.push(item);
  }

  return results;
};

module.exports = takeUntil;
