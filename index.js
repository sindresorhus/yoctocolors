const ESC = "\u001B[";
const END = "m";

// Intentionally not using template literal for performance.
const format = (startCode, endCode, string) =>
	ESC + startCode + END + string + ESC + endCode + END;

export const reset = format.bind(void 0, 0, 0);
export const bold = format.bind(void 0, 1, 22);
export const dim = format.bind(void 0, 2, 22);
export const italic = format.bind(void 0, 3, 23);
export const underline = format.bind(void 0, 4, 24);
export const overline = format.bind(void 0, 53, 55);
export const inverse = format.bind(void 0, 7, 27);
export const hidden = format.bind(void 0, 8, 28);
export const strikethrough = format.bind(void 0, 9, 29);

export const black = format.bind(void 0, 30, 39);
export const red = format.bind(void 0, 31, 39);
export const green = format.bind(void 0, 32, 39);
export const yellow = format.bind(void 0, 33, 39);
export const blue = format.bind(void 0, 34, 39);
export const magenta = format.bind(void 0, 35, 39);
export const cyan = format.bind(void 0, 36, 39);
export const white = format.bind(void 0, 37, 39);
export const gray = format.bind(void 0, 90, 39);

export const bgBlack = format.bind(void 0, 40, 49);
export const bgRed = format.bind(void 0, 41, 49);
export const bgGreen = format.bind(void 0, 42, 49);
export const bgYellow = format.bind(void 0, 43, 49);
export const bgBlue = format.bind(void 0, 44, 49);
export const bgMagenta = format.bind(void 0, 45, 49);
export const bgCyan = format.bind(void 0, 46, 49);
export const bgWhite = format.bind(void 0, 47, 49);
export const bgGray = format.bind(void 0, 100, 49);
