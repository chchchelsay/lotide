const eqArrays = function(array1, array2) {
  if  ((array1.length === array2.length) &&
        array1.every((val, i) => val === array2[i])) {
    return true;
  } else {
    return false;
  }
};
const assertArraysEqual = function(eqArrays) {
  if (eqArrays === true) {
    console.log("These are equal!");
  } else if (eqArrays === false) {
    console.log("Not a match!");
  }
};


const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
      if (sentence[i] !== ' ') {
      let newArr = sentence[i];
       if(results[newArr]) { 
        results[newArr].push(i)
      } else {
        results[newArr] = [i];  
      }
    }
  } 
  return results;
};

letterPositions("lighthouse in the house");
letterPositions("hello");

assertArraysEqual(eqArrays(letterPositions("hello").e, [1]));