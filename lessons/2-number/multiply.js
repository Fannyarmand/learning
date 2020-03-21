const assert = require('assert');

// Excercice ///////////
// 2-number-multiply
function multiply(arg1, arg2){
  return arg1 * arg2;
}

//////// Tests ///////////////////////
assert(typeof multiply === "function", '"multiply" must be a function');
assert(multiply(0, 0) === 0, '"multiply(0, 0)" must return 0');
assert(multiply(0, 100) === 0, '"multiply(0, 100)" must return 0');
assert(multiply(42, 0) === 0, '"multiply(42, 0)" must return 0');
assert(multiply(100, 42) === 4200, '"multiply(100, 42)" must return 4200');
assert(multiply(100, -42) === -4200, '"multiply(100, -42)" must return -4200');

console.log("success! 🎉 🎊");
