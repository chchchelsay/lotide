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

module.exports = findKey;
