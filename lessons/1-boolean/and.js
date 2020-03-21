const assert = require('assert');

// Exercise ///////////
// 1-boolean-and

function and(arg1, arg2){
  return arg1 && arg2;

  // old solution
  if (arg1 && arg2 === true){
    return true;
  } else {
    return false;
  }
}


//////// Tests ///////////////////////
assert(typeof and === "function", '"and" must be a function');
assert(and(true, true) === true, '"and(true, true)" must return true');
assert(and(true, false) === false, '"and(true, false)" must return false');
assert(and(false, true) === false, '"and(false, true)" must return false');
assert(and(false, false) === false, '"and(false, false)" must return false');

console.log("success! 🎉 🎊");
