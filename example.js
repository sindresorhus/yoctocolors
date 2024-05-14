import * as colors from './index.js';

console.log('');

console.log(colors.red('Hello'), colors.blue(colors.bold('World')));

console.log('');

// Nested colors
console.log(colors.magenta(`Welcome to the ${colors.cyan('yoctocolors')} package!`));
