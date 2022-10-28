// TAKEUNTIL takes in an array and a callback; returns a slice of the array with elements from the beginning until callback condition evaluates as true

const takeUntil = function(array, callback) {
 let results = [];

  for (let item of array) {
    if (callback(item)) break; 
    results.push(item);
  }

  return results;
};

/* //TEST CASE
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
*/


module.exports = takeUntil;
