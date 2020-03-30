// Change arguments if necessary
function xor(a, b) {
  if (a === true && b ===true){
    return false;
  } else {
    return a || b;
  }
}

module.exports = xor;
