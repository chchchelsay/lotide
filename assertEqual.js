const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("🥰🥰🥰 Assertion Passed: " + actual + " === " + expected);
  } else if (actual !== expected) {
    console.log("🤪🤪🤪 Assertion Failed: " + actual + " !== " + expected);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);