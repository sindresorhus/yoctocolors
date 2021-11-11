import tty from 'node:tty';

// TODO: Use a better method when it's added to Node.js (https://github.com/nodejs/node/pull/40240)
const hasColors = tty.WriteStream.prototype.hasColors();

const format = hasColors
	? function (string) {
		// Intentionally not using template literal for performance.
		return (
			'\u001B[' + this.start + 'm' + string + '\u001B[' + this.end + 'm'
		);
	}
	: string => string;

export const reset = format.bind({start: 0, end: 0});
export const bold = format.bind({start: 1, end: 22});
export const dim = format.bind({start: 2, end: 22});
export const italic = format.bind({start: 3, end: 23});
export const underline = format.bind({start: 4, end: 24});
export const overline = format.bind({start: 53, end: 55});
export const inverse = format.bind({start: 7, end: 27});
export const hidden = format.bind({start: 8, end: 28});
export const strikethrough = format.bind({start: 9, end: 29});

export const black = format.bind({start: 30, end: 39});
export const red = format.bind({start: 31, end: 39});
export const green = format.bind({start: 32, end: 39});
export const yellow = format.bind({start: 33, end: 39});
export const blue = format.bind({start: 34, end: 39});
export const magenta = format.bind({start: 35, end: 39});
export const cyan = format.bind({start: 36, end: 39});
export const white = format.bind({start: 37, end: 39});
export const gray = format.bind({start: 90, end: 39});

export const bgBlack = format.bind({start: 40, end: 49});
export const bgRed = format.bind({start: 41, end: 49});
export const bgGreen = format.bind({start: 42, end: 49});
export const bgYellow = format.bind({start: 43, end: 49});
export const bgBlue = format.bind({start: 44, end: 49});
export const bgMagenta = format.bind({start: 45, end: 49});
export const bgCyan = format.bind({start: 46, end: 49});
export const bgWhite = format.bind({start: 47, end: 49});
export const bgGray = format.bind({start: 100, end: 49});
