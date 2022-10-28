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

/*  //TEST CASE

const firstNames = [
"Karl",
"Salima",
"Agouhanna",
"Fang",
"Kavith",
"Jason",
"Salima",
"Fang",
"Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});
console.log(result1);
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
*/

module.exports = countOnly;
