const assert = require('assert');

// Excercice ///////////
// 2-number-divide
function divide(arg1, arg2){
  if (arg2 === 0){
    return null;
  }
  return arg1 / arg2;
}

//////// Tests ///////////////////////
assert(typeof divide === "function", '"divide" must be a function');
assert(divide(0, 100) === 0, '"divide(0, 100)" must return 0');
assert(divide(100, 2) === 50, '"divide(100, 2)" must return 50');
assert(divide(100, -2) === -50, '"divide(100, -2)" must return -50');
assert(divide(42, 0) === null, '"divide(42, 0)" must return null');

console.log("success! 🎉 🎊");
