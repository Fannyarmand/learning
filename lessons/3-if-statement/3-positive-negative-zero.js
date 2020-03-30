// Exercice: Check if a number is positive, negative or zero
//
// Change arguments if necessary
function sign(a) {
  if (a > 0) {
    return "positive";
  }
  if (a < 0) {
    return "negative";
  }
  return "zero";

}

module.exports = sign;
