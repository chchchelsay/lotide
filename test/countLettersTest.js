const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const countLetters = require('../countLetters');


const slogan = ("lighthouse in the house");
const numLetter= countLetters(slogan);
console.log(countLetters(slogan));
assertEqual(numLetter["h"], 4);
