const assert = require('assert');

// Exercise ///////////
// 6-is-even-or-odd
// Check if a number is even or not

function isEven(a) {
  return a%2 === 0;
}

//////// Tests ///////////////////////
assert(typeof isEven === "function", '"isEven" must be a function');
assert(isEven(0) === true, '"isEven(0)" must return true');
assert(isEven(2) === true, '"isEven(2)" must return true');
assert(isEven(123456) === true, '"isEven(123456)" must return true');
assert(isEven(1) === false, '"isEven(1)" must return false');
assert(isEven(123) === false, '"isEven(123)" must return false');
assert(isEven(1234567) === false, '"isEven(1234567)" must return false');

console.log("success! 🎉 🎊");
