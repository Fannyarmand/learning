// Exercise: Create a function that return the max value between three number
//
// Change arguments if necessary
function max(a,b,c) {
  if(a > b){
    if (a > c){
      return a;
    }
  }
  if (b > c){
    return b;
  }
  return c;
}

module.exports = max;
