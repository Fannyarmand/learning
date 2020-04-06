// Exercise: Write a function that prepend a grey date/time for each line.
//
// To get current date/time, const date = new Date()
// To get ISO date/time, date.toISOString()
// To write to the term, process.stdout.write(string)
// To change color to yellow, use this code : \u001b[33m
// To reset color change, use this code : \u001b[0m
//
// For more information about terminal color : http://www.lihaoyi.com/post/BuildyourownCommandLinewithANSIescapecodes.html

/**
 * Write to stdout
 *
 * @example stdout(`- hi ${red(Marcel)}, how are you?\n- Hey ${yellow(Big Joe)}, really, really ${red(fuckin')} fine!`)
 *
 * @param arg {String}
 */
function stdout(arg) {
  // Write your code here
}

/**
 * Format string to prepend date-time on each line
 *
 * @example format("hello joe")
 *
 * @param arg {String}
 * @return {String}
 */
function format(arg) {
  // Write your code here
}

/**
 * Ansi color Code list. Default value is the reset code.
 *
 * @example ansiColorCode.red or ansiColorCode['red'] or ansiColorCode["red"] or ansiColorCode[`red`]
 *
 * @enum {Object}
 */
const ansiColorCode = {
  // Write your code here
};

/**
 * Change string color. If the color does not exist or is missing, just reset the color.
 *
 * @example ansiColor("hi Joe, how are you", "yellow")
 *
 * @param text {String}  Text to color
 * @param colorCode {String} Color code
 * @return {String}
 */
function ansiColor(text, colorCode = ansiColorCode.default) {
  // Write your code here
}

/**
 * Change string color to grey (based on ansiColor)
 *
 * @example grey("hi")
 *
 * @param arg
 * @return {String}
 */
function grey(arg) {
  // Write your code here
}

/**
 * Change string color to yellow (based on ansiColor)
 *
 * @example yellow("hi")
 *
 * @param arg
 * @return {String}
 */
function yellow(arg) {
  // Write your code here
}

/**
 * Change string color to red (based on ansiColor)
 *
 * @example red("hey!")
 *
 * @param arg
 * @return {String}
 */
function red(arg) {
  // Write your code here
}

module.exports = stdout;
module.exports.ansiColorCode = ansiColorCode;
module.exports.ansiColor = ansiColor;
module.exports.yellow = yellow;
module.exports.grey = grey;
module.exports.red = red;
