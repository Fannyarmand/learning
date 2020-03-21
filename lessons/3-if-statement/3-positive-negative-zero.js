const assert = require('assert');

// Exercise ///////////
// 3-positive-negative-zero
// Check if a number is positive, negative or zero

//////// Tests ///////////////////////
assert(typeof sign === "function", '"max" must be a function');
assert(sign(0) === 'zero', '"sign(0)" must return "zero"');
assert(sign(42) === 'positive', '"sign(42)" must return "positive"');
assert(sign(-42) === 'negative', '"sign(-42)" must return "negative"');

console.log("success! 🎉 🎊");
