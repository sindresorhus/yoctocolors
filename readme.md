<sup>yoctocolors 🌈</sup>

> The smallest and fastest command-line coloring package on the internet

*Check out [Chalk](https://github.com/chalk/chalk) if you want something more mature and comprehensive.*

## Highlights

- Tiny
- Fast
- Tree-shakeable
- No dependencies
- Actively maintained

## Install

```sh
npm install yoctocolors
```

## Usage

```js
import * as colors from 'yoctocolors';

console.log(colors.red('Yo!'));
```

*This package supports [basic color detection](https://nodejs.org/api/tty.html#writestreamhascolorscount-env). Colors can be forcefully enabled by setting the `FORCE_COLOR` environment variable to `1` and can be forcefully disabled by setting `NO_COLOR` or `NODE_DISABLE_COLORS` to any value. [More info.](https://nodejs.org/api/tty.html#writestreamgetcolordepthenv)*

## Styles

### Modifiers

- `reset` - Reset the current style.
- `bold` - Make the text bold.
- `dim` - Make the text have lower opacity.
- `italic` - Make the text italic. *(Not widely supported)*
- `underline` - Put a horizontal line above the text. *(Not widely supported)*
- `overline` - Put a horizontal line below the text. *(Not widely supported)*
- `inverse`- Invert background and foreground colors.
- `hidden` - Print the text but make it invisible.
- `strikethrough` - Put a horizontal line through the center of the text. *(Not widely supported)*

### Colors

- `black`
- `red`
- `green`
- `yellow`
- `blue`
- `magenta`
- `cyan`
- `white`
- `gray`

### Background colors

- `bgBlack`
- `bgRed`
- `bgGreen`
- `bgYellow`
- `bgBlue`
- `bgMagenta`
- `bgCyan`
- `bgWhite`
- `bgGray`

## Prior art

Yes

## Benchmark

```sh
$ ./benchmark.js
┌─────────┬────────────────┬─────────────┐
│ (index) │    library     │   ops/sec   │
├─────────┼────────────────┼─────────────┤
│    0    │ 'yoctocolors'  │ '8,771,930' │
│    1    │  'nanocolors'  │ '6,896,552' │
│    2    │  'colorette'   │ '6,172,840' │
│    3    │  'picocolors'  │ '6,060,606' │
│    4    │ 'kleur/colors' │ '5,263,158' │
│    5    │    'chalk'     │ '4,484,305' │
│    6    │    'kleur'     │ '3,731,343' │
│    7    │ 'ansi-colors'  │ '1,283,697' │
│    8    │  'cli-color'   │  '393,236'  │
└─────────┴────────────────┴─────────────┘
```

*See [benchmark.js](benchmark.js).*

## FAQ

### What is yocto?

[It was the smallest official unit prefix in the metric system until 2022.](https://en.wikipedia.org/wiki/Yocto-) Much smaller than nano.

## Related

- [yoctodelay](https://github.com/sindresorhus/yoctodelay) - Delay a promise a given amount of time
- [chalk](https://github.com/chalk/chalk) - Terminal string styling
