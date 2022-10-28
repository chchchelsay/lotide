const assertEqual = require('./assertEqual');

/*COUNTONLY: takes in an array and an object, returns result object with counts of values defined in input object .
counts only truthy value keys (not falsy or unspecified values)

allItems - array of strings to look thru
itemsToCount - object specifying WHAT to count
also returns how many instances of each string were found in allItems array inputted into a new object
*/

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;
