// Intentionally not using template literal for performance.
const
  fmt = endCode => startCode => string => '\u001B[' + startCode + 'm' + string + '\u001B[' + endCode + 'm',
  fg = fmt(39),
  bg = fmt(49);

export const reset = fmt(0)(0);
export const bold = fmt(22)(1);
export const dim = fmt(22)(2);
export const italic = fmt(23)(3);
export const underline = fmt(24)(4);
export const overline = fmt(55)(53);
export const inverse = fmt(27)(7);
export const hidden = fmt(28)(8);
export const strikethrough = fmt(29)(9);

export const black = fg(30);
export const red = fg(31);
export const green = fg(32);
export const yellow = fg(33);
export const blue = fg(34);
export const magenta = fg(35);
export const cyan = fg(36);
export const white = fg(37);
export const gray = fg(90);

export const bgBlack = bg(40);
export const bgRed = bg(41);
export const bgGreen = bg(42);
export const bgYellow = bg(43);
export const bgBlue = bg(44);
export const bgMagenta = bg(45);
export const bgCyan = bg(46);
export const bgWhite = bg(47);
export const bgGray = bg(100);
