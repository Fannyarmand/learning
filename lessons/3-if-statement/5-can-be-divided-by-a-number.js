const assert = require('assert');

// Exercise ///////////
// 5-can-be-divided-by-a-number
// Check if a number can be divided by a number with no rest or not

//////// Tests ///////////////////////
assert(typeof canBeDivided === "function", '"canBeDivided" must be a function');
assert(canBeDivided(5, 5) === true, '"canBeDivided(5, 5)" must return true');
assert(canBeDivided(25, 5) === true, '"canBeDivided(25, 5)" must return true');
assert(canBeDivided(11, 11) === true, '"canBeDivided(11, 11)" must return true');
assert(canBeDivided(121, 11) === true, '"canBeDivided(121, 11)" must return true');
assert(canBeDivided(4, 11) === false, '"canBeDivided(4, 11)" must return false');
assert(canBeDivided(789, 12) === false, '"canBeDivided(789, 12)" must return false');

console.log("success! 🎉 🎊");
