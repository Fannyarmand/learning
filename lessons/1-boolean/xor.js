const assert = require('assert');

// Exercise ///////////
// 1-boolean-xor
function xor(arg1, arg2){
  if (arg1 === true && arg2 === true){
    return false;
  } else {
    return arg1 || arg2;
  }
}

//////// Tests ///////////////////////
assert(typeof xor === "function", '"xor" must be a function');
assert(xor(true, true) === false, '"xor(true, true)" must return false');
assert(xor(true, false) === true, '"xor(true, false)" must return true');

assert(xor(false, true) === true, '"xor(false, true)" must return true');
assert(xor(false, false) === false, '"xor(false, false)" must return false');

console.log("success! 🎉 🎊");
