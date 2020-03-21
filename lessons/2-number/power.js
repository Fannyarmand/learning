const assert = require('assert');

// Exercise ///////////
// 2-number-power
function power(number,power){
  return Math.pow(number,power);
}
//////// Tests ///////////////////////
assert(typeof power === "function", '"power" must be a function');
assert(power(0, 0) === 1, '"power(0, 0)" must return 1');
assert(power(0, 100) === 0, '"power(0, 100)" must return 0');
assert(power(10, 2) === 100, '"power(10, 2)" must return 100');
assert(power(10, -2) === 0.01, '"power(10, -2)" must return 0.01');

console.log("success! 🎉 🎊");
