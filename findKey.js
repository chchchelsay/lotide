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

const findKey = function(object, callback) {
  const keys = Object.keys(object);

  for (let i of keys) {
    if (callback(object[i])) {
      return i;
    }

  }
};  





// const values = Object.values(object);
// let result; 

//   for (let i of values) {
//     if (object[i] === callback); 
//   result = i;
//   }

//   return result;



console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); 

module.exports = findKey;
