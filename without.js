//WITHOUT takes in an array and returns a subset of the array without specified elements

const without = function(source, itemsToRemove) {
  let newArray = source.filter(i => !itemsToRemove.includes(i));
  console.log(newArray);  
};

module.exports = without;

