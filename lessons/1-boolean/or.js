const assert = require('assert');

// Exercise ///////////
// 1-boolean-or
function or(arg1,arg2){
  return arg1 || arg2;
}

//////// Tests ///////////////////////
assert(typeof or === "function", '"or" must be a function');
assert(or(true, true) === true, '"or(true, true)" must return true');
assert(or(true, false) === true, '"or(true, false)" must return true');
assert(or(false, true) === true, '"or(false, true)" must return true');
assert(or(false, false) === false, '"or(false, false)" must return false');

console.log("success! 🎉 🎊");
