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

test('Default export', t => {
	t.is(colorsDefaultExport.red('Error'), '\u001B[31mError\u001B[39m');
});
