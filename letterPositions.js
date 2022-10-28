// LETTERPOSITIONS: returns indices of each occurrence of each letter in a given string

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

module.exports = letterPositions;
