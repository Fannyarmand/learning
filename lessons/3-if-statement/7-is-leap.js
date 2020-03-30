// Exercise: Check if a year is a leap or not
//
// Leap Years are any year that can be exactly divided by 4 (such as 2016, 2020, 2024, etc)
// except if it can be exactly divided by 100, then it isn't (such as 2100, 2200, etc)
// except if it can be exactly divided by 400, then it is (such as 2000, 2400)
//
// Change arguments if necessary
function isLeap(year) {
  if (year % 400 === 0) {
    return true;
  }

  if (year % 100 === 0){
    return false;
  }

  return year % 4 === 0;


}

module.exports = isLeap;
