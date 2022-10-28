//FINDKEY takes in an object and callback; returns the first key of object that matches the callback function evaluating true; otherwise undefined if key not found
 //added break in line 18 to only return first occurrence of key if there are multiple     

const findKey = function(object, callback) {
  const keys = Object.keys(object);

  for (let i of keys) {
    if (callback(object[i])) {
      console.log(i);
      break;
    }

  }
};  

 /* // TEST CASE 
(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3)); 
*/

module.exports = findKey;
