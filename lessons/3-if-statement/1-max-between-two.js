const assert = require('assert');

// Exercise ///////////
// 1-max-between-two
// Create a function that return the max value between two number

//////// Tests ///////////////////////
assert(typeof max === "function", '"max" must be a function');
assert(max(0, 0) === 0, '"add(0, 0)" must return 0');
assert(max(0, 100) === 100, '"add(0, 100)" must return 100');
assert(max(42, 0) === 42, '"add(42, 0)" must return 42');

console.log("success! 🎉 🎊");
