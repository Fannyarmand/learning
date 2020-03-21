const assert = require('assert');

// Exercise ///////////
// 4-can-be-divided-by-5-or-11
// Check if a number can be divided by 5 or 11 with no rest or not

//////// Tests ///////////////////////
assert(typeof canBeDivided === "function", '"canBeDivided" must be a function');
assert(canBeDivided(5) === true, '"canBeDivided(5)" must return true');
assert(canBeDivided(25) === true, '"canBeDivided(25)" must return true');
assert(canBeDivided(11) === true, '"canBeDivided(11)" must return true');
assert(canBeDivided(121) === true, '"canBeDivided(121)" must return true');
assert(canBeDivided(4) === false, '"canBeDivided(4)" must return false');
assert(canBeDivided(789) === false, '"canBeDivided(789)" must return false');

console.log("success! 🎉 🎊");
