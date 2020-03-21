const assert = require('assert');

// Excercice ///////////
// 2-number-sub
function sub(arg1,arg2){
  return arg1 - arg2;
}
//////// Tests ///////////////////////
assert(typeof sub === "function", '"sub" must be a function');
assert(sub(0, 0) === 0, '"sub(0, 0)" must return 0');
assert(sub(0, 100) === -100, '"sub(0, 100)" must return -100');
assert(sub(42, 0) === 42, '"sub(42, 0)" must return 42');
assert(sub(100, 42) === 58, '"sub(100, 42)" must return 58');
assert(sub(100, -42) === 142, '"sub(100, -42)" must return 142');

console.log("success! 🎉 🎊");
