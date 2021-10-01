import test from 'ava';
import * as colors from './index.js';

test('main', t => {
	t.is(colors.red('foo'), '\u001B[31mfoo\u001B[39m');
});
