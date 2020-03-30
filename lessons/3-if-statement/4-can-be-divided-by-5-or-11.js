// Exercise: Check if a number can be divided by 5 or 11 with no rest or not
//
// Change arguments if necessary
function canBeDividedBy5or11(number) {
  if (number % 5 === 0){
    return true;
  }

  return number % 11 === 0;

}

module.exports = canBeDividedBy5or11;
