// Exercise: Check which kind of character
// A character is alphabet if it in between a-z or A-Z.
// A character is digit if it is in between 0-9.
// A character is special symbol character if it neither alphabet nor digit.
//
// Change arguments if necessary

const aCode = "a".charCodeAt();
const zCode = "z".charCodeAt();
const ACode = "A".charCodeAt();
const ZCode = "Z".charCodeAt();
const zeroCode = "0".charCodeAt();
const nineCode = "9".charCodeAt();

/**
 * What is let us know which...
 *
 * @param arg String to check
 * @returns {string}
 */
function whatIs(arg) {
    const charCode = arg.charCodeAt(0);

    if ((charCode >= aCode && charCode <= zCode ) || (charCode >= ACode && charCode <= ZCode)){
        return "alphabet";
    }

    if (charCode >= zeroCode && charCode <= nineCode) {
        return "digit";
    }

    return "special";
}

module.exports = whatIs;
