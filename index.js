function _(m, o) {
	return function (i) {
		return "[" + m + "m" + i + "[" + o + "m";
	};
}

export const bblue = _(94, 104),
	bgBlack = _(40, 49),
	bgBlue = _(44, 49),
	bgCyan = _(46, 49),
	bgGray = _(100, 49),
	bgGreen = _(42, 49),
	bgMagenta = _(45, 49),
	bgRed = _(41, 49),
	bgWhite = _(47, 49),
	bgYellow = _(43, 49),
	black = _(30, 39),
	blue = _(34, 39),
	bold = _(1, 22),
	cyan = _(36, 39),
	dim = _(2, 22),
	gray = _(90, 39),
	green = _(32, 39),
	hidden = _(8, 28),
	inverse = _(7, 27),
	italic = _(3, 23),
	magenta = _(35, 39),
	overline = _(53, 55),
	red = _(31, 39),
	reset = _(0, 0),
	strikethrough = _(9, 29),
	underline = _(4, 24),
	white = _(37, 39),
	yellow = _(33, 39);
