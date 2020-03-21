const assert = require('assert');

// Exercise ///////////
// 2-number-add
function add(arg1,arg2){
  return arg1 + arg2;
}
//////// Tests ///////////////////////
assert(typeof add === "function", '"add" must be a function');
assert(add(0, 0) === 0, '"add(0, 0)" must return 0');
assert(add(0, 100) === 100, '"add(0, 100)" must return 100');
assert(add(42, 0) === 42, '"add(42, 0)" must return 42');
assert(add(100, 42) === 142, '"add(100, 42)" must return 142');
assert(add(100, -42) === 58, '"add(100, -42)" must return 58');

console.log("success! 🎉 🎊");
