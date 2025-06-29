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

	let result = open,
		lastIndex = 0;

	while (index !== -1) {
		result += string.slice(lastIndex, index) + open;
		lastIndex = index + close.length;
		index = string.indexOf(close, lastIndex);
	}

	result += string.slice(lastIndex) + close;
	return result;
};

// Don't coloring when your terminal is NOT support
const format = (open, close) => {
	return (input) => (!hasColors ? input : color(open, close, input));
};

// Wrap ANSI in parameters
export const reset = format('\x1b[0m', '\x1b[0m');
export const bold = format('\x1b[1m', '\x1b[22m');
export const dim = format('\x1b[2m', '\x1b[22m');
export const italic = format('\x1b[3m', '\x1b[23m');
export const underline = format('\x1b[4m', '\x1b[24m');
export const overline = format('\x1b[53m', '\x1b[55m');
export const inverse = format('\x1b[7m', '\x1b[27m');
export const hidden = format('\x1b[8m', '\x1b[28m');
export const strikethrough = format('\x1b[9m', '\x1b[29m');

export const black = format('\x1b[30m', '\x1b[39m');
export const red = format('\x1b[31m', '\x1b[39m');
export const green = format('\x1b[32m', '\x1b[39m');
export const yellow = format('\x1b[33m', '\x1b[39m');
export const blue = format('\x1b[34m', '\x1b[39m');
export const magenta = format('\x1b[35m', '\x1b[39m');
export const cyan = format('\x1b[36m', '\x1b[39m');
export const white = format('\x1b[37m', '\x1b[39m');
export const gray = format('\x1b[90m', '\x1b[39m');

export const bgBlack = format('\x1b[40m', '\x1b[49m');
export const bgRed = format('\x1b[41m', '\x1b[49m');
export const bgGreen = format('\x1b[42m', '\x1b[49m');
export const bgYellow = format('\x1b[43m', '\x1b[49m');
export const bgBlue = format('\x1b[44m', '\x1b[49m');
export const bgMagenta = format('\x1b[45m', '\x1b[49m');
export const bgCyan = format('\x1b[46m', '\x1b[49m');
export const bgWhite = format('\x1b[47m', '\x1b[49m');
export const bgGray = format('\x1b[100m', '\x1b[49m');

export const redBright = format('\x1b[91m', '\x1b[39m');
export const greenBright = format('\x1b[92m', '\x1b[39m');
export const yellowBright = format('\x1b[93m', '\x1b[39m');
export const blueBright = format('\x1b[94m', '\x1b[39m');
export const magentaBright = format('\x1b[95m', '\x1b[39m');
export const cyanBright = format('\x1b[96m', '\x1b[39m');
export const whiteBright = format('\x1b[97m', '\x1b[39m');

export const bgRedBright = format('\x1b[101m', '\x1b[49m');
export const bgGreenBright = format('\x1b[102m', '\x1b[49m');
export const bgYellowBright = format('\x1b[103m', '\x1b[49m');
export const bgBlueBright = format('\x1b[104m', '\x1b[49m');
export const bgMagentaBright = format('\x1b[105m', '\x1b[49m');
export const bgCyanBright = format('\x1b[106m', '\x1b[49m');
export const bgWhiteBright = format('\x1b[107m', '\x1b[49m');
