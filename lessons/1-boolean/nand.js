const assert = require('assert');

// Exercise ///////////
// 1-boolean-nand
function nand(arg1,arg2){
  return !(arg1 && arg2);
}

//////// Tests ///////////////////////
assert(typeof nand === "function", '"nand" must be a function');
assert(nand(true, true) === false, '"nand(true, true)" must return false');
assert(nand(true, false) === true, '"nand(true, false)" must return true');
assert(nand(false, true) === true, '"nand(false, true)" must return true');
assert(nand(false, false) === true, '"nand(false, false)" must return true');

console.log("success! 🎉 🎊");
