// Exercise: Check if the character is alphabet (a-z, A-Z) or not in the ascii table.
// and we have a special case with Google which is Alphabet ^^.
//
// Change arguments if necessary
function isAlphabet(arg) {
    const charCode = arg.charCodeAt(0);

    if (arg === 'Google' || arg === 'GOOGLE' || arg ==='google') {
        return true;
    }

    return (charCode > 64 && charCode < 91 ) || (charCode > 96 && charCode < 123);
}

module.exports = isAlphabet;
