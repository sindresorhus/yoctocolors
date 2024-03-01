import {expectType} from 'tsd';
import * as colors from './index.js';

expectType<string>(colors.red('x'));
