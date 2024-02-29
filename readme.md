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
- `redBright`
- `greenBright`
- `yellowBright`
- `blueBright`
- `magentaBright`
- `cyanBright`
- `whiteBright`

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
- `bgRedBright`
- `bgGreenBright`
- `bgYellowBright`
- `bgBlueBright`
- `bgMagentaBright`
- `bgCyanBright`
- `bgWhiteBright`

## Prior art

Yes

## Benchmark

```sh
$ ./benchmark.js
┌─────────┬────────────────┬─────────────┐
│ (index) │    library     │   ops/sec   │
├─────────┼────────────────┼─────────────┤
│    0    │ 'yoctocolors'  │ '8,928,571' │
│    1    │  'nanocolors'  │ '8,000,000' │
│    2    │  'picocolors'  │ '7,751,938' │
│    3    │  'colorette'   │ '6,097,561' │
│    4    │ 'kleur/colors' │ '5,882,353' │
│    5    │    'chalk'     │ '5,263,158' │
│    6    │    'kleur'     │ '4,115,226' │
│    7    │ 'ansi-colors'  │ '1,288,660' │
│    8    │  'cli-color'   │  '377,786'  │
└─────────┴────────────────┴─────────────┘
```

*See [benchmark.js](benchmark.js).*

## FAQ

### What is yocto?

[It was the smallest official unit prefix in the metric system until 2022.](https://en.wikipedia.org/wiki/Yocto-) Much smaller than nano.

## Related

- [yoctodelay](https://github.com/sindresorhus/yoctodelay) - Delay a promise a given amount of time
- [chalk](https://github.com/chalk/chalk) - Terminal string styling
