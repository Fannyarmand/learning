const assert = require('assert');

// Exercice 1-boolean-not
// Create a function "not" with a boolean argument
// and return the oposite (not)

function not(arg){
  return !arg;
}

//////// Tests ///////////////////////
assert(typeof not === "function", '"not" must be a function');
assert(not(true) === false, '"not(true)" must return false');
assert(not(false) === true, '"not(false)" must return true');

console.log("success! 🎉 🎊");
