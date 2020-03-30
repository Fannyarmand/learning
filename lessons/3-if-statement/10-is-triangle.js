// Exercise: Based on angles, check if the values are a valid triangle
// The sum of the three angle of a triangle is equal to 180
//
// Change arguments if necessary
function isTriangle(angle1, angle2, angle3) {
    const angles = angle1 + angle2 + angle3;

    return angles === 180;

}

module.exports = isTriangle;
