import {execFile} from 'node:child_process';
import {env} from 'node:process';
import {promisify} from 'node:util';
import test from 'ava';
import colorsDefaultExport from './index.js';
import * as colors from './index.js';

const pExecFile = promisify(execFile);

const testColor = (t, methodName, startCode, endCode) => {
	t.is(colors[methodName]('foo'), `\u001B[${startCode}mfoo\u001B[${endCode}m`);
};

test('Add color ANSI sequences - reset', testColor, 'reset', 0, 0);
test('Add color ANSI sequences - bold', testColor, 'bold', 1, 22);
test('Add color ANSI sequences - dim', testColor, 'dim', 2, 22);
test('Add color ANSI sequences - italic', testColor, 'italic', 3, 23);
test('Add color ANSI sequences - underline', testColor, 'underline', 4, 24);
test('Add color ANSI sequences - overline', testColor, 'overline', 53, 55);
test('Add color ANSI sequences - inverse', testColor, 'inverse', 7, 27);
test('Add color ANSI sequences - hidden', testColor, 'hidden', 8, 28);
test('Add color ANSI sequences - strikethrough', testColor, 'strikethrough', 9, 29);
test('Add color ANSI sequences - black', testColor, 'black', 30, 39);
test('Add color ANSI sequences - red', testColor, 'red', 31, 39);
test('Add color ANSI sequences - green', testColor, 'green', 32, 39);
test('Add color ANSI sequences - yellow', testColor, 'yellow', 33, 39);
test('Add color ANSI sequences - blue', testColor, 'blue', 34, 39);
test('Add color ANSI sequences - magenta', testColor, 'magenta', 35, 39);
test('Add color ANSI sequences - cyan', testColor, 'cyan', 36, 39);
test('Add color ANSI sequences - white', testColor, 'white', 37, 39);
test('Add color ANSI sequences - gray', testColor, 'gray', 90, 39);
test('Add color ANSI sequences - bgBlack', testColor, 'bgBlack', 40, 49);
test('Add color ANSI sequences - bgRed', testColor, 'bgRed', 41, 49);
test('Add color ANSI sequences - bgGreen', testColor, 'bgGreen', 42, 49);
test('Add color ANSI sequences - bgYellow', testColor, 'bgYellow', 43, 49);
test('Add color ANSI sequences - bgBlue', testColor, 'bgBlue', 44, 49);
test('Add color ANSI sequences - bgMagenta', testColor, 'bgMagenta', 45, 49);
test('Add color ANSI sequences - bgCyan', testColor, 'bgCyan', 46, 49);
test('Add color ANSI sequences - bgWhite', testColor, 'bgWhite', 47, 49);
test('Add color ANSI sequences - bgGray', testColor, 'bgGray', 100, 49);
test('Add color ANSI sequences - redBright', testColor, 'redBright', 91, 39);
test('Add color ANSI sequences - greenBright', testColor, 'greenBright', 92, 39);
test('Add color ANSI sequences - yellowBright', testColor, 'yellowBright', 93, 39);
test('Add color ANSI sequences - blueBright', testColor, 'blueBright', 94, 39);
test('Add color ANSI sequences - magentaBright', testColor, 'magentaBright', 95, 39);
test('Add color ANSI sequences - cyanBright', testColor, 'cyanBright', 96, 39);
test('Add color ANSI sequences - whiteBright', testColor, 'whiteBright', 97, 39);
test('Add color ANSI sequences - bgRedBright', testColor, 'bgRedBright', 101, 49);
test('Add color ANSI sequences - bgGreenBright', testColor, 'bgGreenBright', 102, 49);
test('Add color ANSI sequences - bgYellowBright', testColor, 'bgYellowBright', 103, 49);
test('Add color ANSI sequences - bgBlueBright', testColor, 'bgBlueBright', 104, 49);
test('Add color ANSI sequences - bgMagentaBright', testColor, 'bgMagentaBright', 105, 49);
test('Add color ANSI sequences - bgCyanBright', testColor, 'bgCyanBright', 106, 49);
test('Add color ANSI sequences - bgWhiteBright', testColor, 'bgWhiteBright', 107, 49);

test('Is noop when no colors are supported', async t => {
	const {stdout} = await pExecFile('node', ['fixture.js'], {env: {...env, FORCE_COLOR: '0'}});
	t.is(stdout, 'foo\n');
});

test('Nested colors are handled properly', t => {
	const redText = colors.red(`Error: ${colors.yellow('Warning')} continues in red`);
	t.is(redText, '\u001B[31mError: \u001B[33mWarning\u001B[31m continues in red\u001B[39m');
});

test('Nested dim inside bold is handled properly', t => {
  const boldDimText = `Hello ${colors.dim('world')}, ${colors.bold(`are ${colors.dim('you')} ok`)}?`;
  t.is(boldDimText, 'Hello \u001B[2mworld\u001B[22m, \u001B[1mare \u001B[2myou\u001B[22m\u001B[1m ok\u001B[22m?');
});

test('Nested bold inside dim is handled properly', t => {
  const dimBoldText = colors.dim(`outer ${colors.bold('inner')} rest`);
  t.is(dimBoldText, '\u001B[2mouter \u001B[1minner\u001B[22m\u001B[2m rest\u001B[22m');
});

test('Bold with multiple dim segments', t => {
  const result = colors.bold(`a ${colors.dim('b')} c ${colors.dim('d')} e`);
  t.is(result, '\u001B[1ma \u001B[2mb\u001B[22m\u001B[1m c \u001B[2md\u001B[22m\u001B[1m e\u001B[22m');
});

test('Self-nesting with bold', t => {
  const result = colors.bold(colors.bold('x'));
  t.is(result, '\u001B[1m\u001B[1mx\u001B[22m\u001B[1m\u001B[22m');
});

test('Self-nesting with dim', t => {
  const result = colors.dim(colors.dim('x'));
  t.is(result, '\u001B[2m\u001B[2mx\u001B[22m\u001B[2m\u001B[22m');
});

test('Same-style nesting for red', t => {
  const result = colors.red(`a ${colors.red('b')} c`);
  t.is(result, '\u001B[31ma \u001B[31mb\u001B[31m c\u001B[39m');
});

test('Foreground red with inner background blue', t => {
  const result = colors.red(`a ${colors.bgBlue('b')} c`);
  t.is(result, '\u001B[31ma \u001B[44mb\u001B[49m c\u001B[39m');
});

test('Background blue with inner foreground red', t => {
  const result = colors.bgBlue(`a ${colors.red('b')} c`);
  t.is(result, '\u001B[44ma \u001B[31mb\u001B[39m c\u001B[49m');
});

test('Literal close sequence inside input (bold)', t => {
  const result = colors.bold(`x${'\u001B[22m'}y`);
  t.is(result, '\u001B[1mx\u001B[22m\u001B[1my\u001B[22m');
});

test('Literal close sequence inside input (red)', t => {
  const result = colors.red(`x${'\u001B[39m'}y`);
  t.is(result, '\u001B[31mx\u001B[31my\u001B[39m');
});

test('Non-string coercion', t => {
  // Number coercion
  t.is(colors.red(123), '\u001B[31m123\u001B[39m');
  // ToString coercion
  t.is(colors.bold({toString: () => 'x'}), '\u001B[1mx\u001B[22m');
});

test('Empty string handling', t => {
  t.is(colors.red(''), '\u001B[31m\u001B[39m');
});

test('Default export', t => {
	t.is(colorsDefaultExport.red('Error'), '\u001B[31mError\u001B[39m');
});
