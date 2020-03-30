// Exercise: Based on angles, defined which kind of triangle it is
// - Equilateral triangle has 3 identical angles
// - Isosceles triangle has 2 identical angles
// - Else Basic triangle
// If it's not a triangle, it should throw ( throw new Error('this is not a triangle'))
//
// Change arguments if necessary
function whichTriangle(angle1, angle2, angle3) {

    if (angle1 === angle2 === angle3 ){
        return "equilateral";
    }

    if ((angle1 === angle2) || (angle2 === angle3) || (angle1 === angle3)){
        return "isosceles";
    }

    if ((angle1 + angle2 + angle3) !== 180){
        throw new Error('this is not a triangle');
    }

    return "basic";

}

module.exports = whichTriangle;
