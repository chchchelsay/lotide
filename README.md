# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by Chelsea Dwarika/@chchchelsay as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @chchchelsay/lotide`

**Require it:**

`const _ = require('@chchchelsay/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual()`: compares two arrays and logs assertion message to console
* `assertEqual()`: compares two values and logs assertion message to console
*  `assertObjectsEqual()`: compares two objects and logs assertion message to console
*  `countLetters()`: takes in string and returns count of each letter occurrence in string
*  `countOnly()`: takes in array & input object; returns new object with counts of everything listed by input object
*  `eqArrays()`: compares two arrays and returns true/false based on a perfect match
*  `eqObjects()`: compares two objects and returns true/false based on a perfect match
*  `findKey()`: takes in object & callback; returns first key in object that matches callback ===/else undefined
*  `findKeyByValue()`: takes in object & value; looks through object and returns first key that matches value/ else undefined
*  `flatten()`: 'flattens' an array that contains nested arrays of elements into a new un-nested one
*  `head()`: returns first item in an array
*  `letterPositions()`: returns indices for where each character is found in a string
*  `map()`: takes in array & callback function; returns new array based on callback function results
*  `tail()`: returns everything BUT the first item/head in an array
*  `takeUntil()`: takes in array and callback function; returns slice of array elements until callback function evaluates to true.
*  `middle()`: returns middle-most element(s) of an array
*  `without()`: returns subset of given array without specified unwanted elements