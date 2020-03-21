const assert = require('assert');

// Exercise ///////////
// 2-max-between-three
// Create a function that return the max value between three number

//////// Tests ///////////////////////
assert(typeof max === "function", '"max" must be a function');
assert(max(0, 0, 0) === 0, '"add(0, 0, 0)" must return 0');
assert(max(42, 0, 0) === 42, '"add(42, 0, 0)" must return 42');
assert(max(0, 100, 0) === 100, '"add(0, 100, 0)" must return 100');
assert(max(1, 2, 3) === 3, '"add(1, 2, 3)" must return 3');

console.log("success! 🎉 🎊");
