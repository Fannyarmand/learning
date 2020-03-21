const assert = require('assert');

// Exercise ///////////
// 1-boolean-nor

function nor(arg1,arg2){
  return !(arg1 || arg2);
}

//////// Tests ///////////////////////
assert(typeof nor === "function", '"nor" must be a function');
assert(nor(true, true) === false, '"nor(true, true)" must return false');
assert(nor(true, false) === false, '"nor(true, false)" must return false');
assert(nor(false, true) === false, '"nor(false, true)" must return false');
assert(nor(false, false) === true, '"nor(false, false)" must return true');

console.log("success! 🎉 🎊");
