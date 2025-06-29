import tty from 'node:tty';

// eslint-disable-next-line no-warning-comments
// TODO: Use a better method when it"s added to Node.js (https://github.com/nodejs/node/pull/40240)
// Lots of optionals here to support Deno.
const hasColors = tty?.WriteStream?.prototype?.hasColors?.() ?? false;

const color = (open, close, input) => {
	const string = input + ''; // eslint-disable-line no-implicit-coercion -- This is faster.
	let index = string.indexOf(close, open.length);

	if (index === -1) {
		// Note: Intentionally not using string interpolation for performance reasons.
		return open + string + close;
	}
	// Handle nested colors.

	// We could have done this, but it"s too slow (as of Node.js 22).
	// return open + string.replaceAll(close, open) + close;

	let result = open;
	let lastIndex = 0;

	while (index !== -1) {
		result += string.slice(lastIndex, index) + open;
		lastIndex = index + close.length;
		index = string.indexOf(close, lastIndex);
	}

	result += string.slice(lastIndex) + close;
	return result;
};

// Don't coloring when your terminal is NOT support
const format = (open, close) => input => hasColors ? color(open, close, input) : input;

// Wrap ANSI in parameters
export const reset = format('\u001B[0m', '\u001B[0m');
export const bold = format('\u001B[1m', '\u001B[22m');
export const dim = format('\u001B[2m', '\u001B[22m');
export const italic = format('\u001B[3m', '\u001B[23m');
export const underline = format('\u001B[4m', '\u001B[24m');
export const overline = format('\u001B[53m', '\u001B[55m');
export const inverse = format('\u001B[7m', '\u001B[27m');
export const hidden = format('\u001B[8m', '\u001B[28m');
export const strikethrough = format('\u001B[9m', '\u001B[29m');

export const black = format('\u001B[30m', '\u001B[39m');
export const red = format('\u001B[31m', '\u001B[39m');
export const green = format('\u001B[32m', '\u001B[39m');
export const yellow = format('\u001B[33m', '\u001B[39m');
export const blue = format('\u001B[34m', '\u001B[39m');
export const magenta = format('\u001B[35m', '\u001B[39m');
export const cyan = format('\u001B[36m', '\u001B[39m');
export const white = format('\u001B[37m', '\u001B[39m');
export const gray = format('\u001B[90m', '\u001B[39m');

export const bgBlack = format('\u001B[40m', '\u001B[49m');
export const bgRed = format('\u001B[41m', '\u001B[49m');
export const bgGreen = format('\u001B[42m', '\u001B[49m');
export const bgYellow = format('\u001B[43m', '\u001B[49m');
export const bgBlue = format('\u001B[44m', '\u001B[49m');
export const bgMagenta = format('\u001B[45m', '\u001B[49m');
export const bgCyan = format('\u001B[46m', '\u001B[49m');
export const bgWhite = format('\u001B[47m', '\u001B[49m');
export const bgGray = format('\u001B[100m', '\u001B[49m');

export const redBright = format('\u001B[91m', '\u001B[39m');
export const greenBright = format('\u001B[92m', '\u001B[39m');
export const yellowBright = format('\u001B[93m', '\u001B[39m');
export const blueBright = format('\u001B[94m', '\u001B[39m');
export const magentaBright = format('\u001B[95m', '\u001B[39m');
export const cyanBright = format('\u001B[96m', '\u001B[39m');
export const whiteBright = format('\u001B[97m', '\u001B[39m');

export const bgRedBright = format('\u001B[101m', '\u001B[49m');
export const bgGreenBright = format('\u001B[102m', '\u001B[49m');
export const bgYellowBright = format('\u001B[103m', '\u001B[49m');
export const bgBlueBright = format('\u001B[104m', '\u001B[49m');
export const bgMagentaBright = format('\u001B[105m', '\u001B[49m');
export const bgCyanBright = format('\u001B[106m', '\u001B[49m');
export const bgWhiteBright = format('\u001B[107m', '\u001B[49m');
