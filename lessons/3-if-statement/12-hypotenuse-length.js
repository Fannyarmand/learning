// Exercise: Based on two sides, define the hypotenuse length
// "the area of the square whose side is the hypotenuse (the side opposite the right angle) is equal to the sum of the areas of the squares on the other two sides
//
// Change arguments if necessary
function hypotenuseLength(side1, side2) {
    return Math.sqrt(Math.pow(side1, 2) + Math.pow(side2, 2));
}

module.exports = hypotenuseLength;
