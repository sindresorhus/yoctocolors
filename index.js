import tty from 'node:tty';

// TODO: Use a better method when it's added to Node.js (https://github.com/nodejs/node/pull/40240)
const hasColors = tty.WriteStream.prototype.hasColors();

// Intentionally not using template literal for performance.
const format = (startCode, endCode) => hasColors ? string => '\u001B[' + startCode + 'm' + string + '\u001B[' + endCode + 'm' : string => string;

// eslint-disable-next-line one-var
export const
	reset = format(0, 0),
	bold = format(1, 22),
	dim = format(2, 22),
	italic = format(3, 23),
	underline = format(4, 24),
	overline = format(53, 55),
	inverse = format(7, 27),
	hidden = format(8, 28),
	strikethrough = format(9, 29),

	black = format(30, 39),
	red = format(31, 39),
	green = format(32, 39),
	yellow = format(33, 39),
	blue = format(34, 39),
	magenta = format(35, 39),
	cyan = format(36, 39),
	white = format(37, 39),
	gray = format(90, 39),

	bgBlack = format(40, 49),
	bgRed = format(41, 49),
	bgGreen = format(42, 49),
	bgYellow = format(43, 49),
	bgBlue = format(44, 49),
	bgMagenta = format(45, 49),
	bgCyan = format(46, 49),
	bgWhite = format(47, 49),
	bgGray = format(100, 49);

