import { up } from '../commands/nwd/up.js';
import { ls } from '../commands/nwd/ls.js';
import { validateOs } from '../validators/validate-os.js';

import { validateCommandWithTwoArgs } from '../validators/validate-command-with-two-args.js';
import { cp } from '../commands/file/cp.js';
import { mv } from '../commands/file/mv.js';
import { rn } from '../commands/file/rn.js';
import { compress } from '../commands/brotli/compress.js';
import { decompress } from '../commands/brotli/decompress.js';
import { validateCommandWithOneArg } from '../validators/validate-command-with-one-arg.js';
import { cat } from '../commands/file/cat.js';
import { add } from '../commands/file/add.js';
import { rm } from '../commands/file/rm.js';
import { hash } from '../commands/hash.js';
import { cd } from '../commands/nwd/cd.js';

import {SPACE} from './space.js';

const commands = {
    UP: {name: 'up', func: up},
    CD: {name: `cd${SPACE}`, func: (input) => validateCommandWithOneArg(input, cd, 'cd ')},
    LS: {name: 'ls', func: ls},
    
    CAT: {name: `cat${SPACE}`, func: (input) => validateCommandWithOneArg(input, cat, 'cat ')},
    ADD: {name: `add${SPACE}`, func: (input) => validateCommandWithOneArg(input, add, 'add ')},
    RN: {name: `rn${SPACE}`, func: (input) => validateCommandWithTwoArgs(input, rn, 'rn')},
    CP: {name: `cp${SPACE}`, func: (input) => validateCommandWithTwoArgs(input, cp, 'cp')},
    MV: {name: `mv${SPACE}`, func: (input) => validateCommandWithTwoArgs(input, mv, 'rn')},
    RM: {name: `rm${SPACE}`, func: (input) => validateCommandWithOneArg(input, rm, 'rm ')},

    COMPRESS: {name: `compress${SPACE}`, func: (input) => validateCommandWithTwoArgs(input, compress, 'compress')},
    DECOMPRESS: {name: `decompress${SPACE}`, func: (input) => validateCommandWithTwoArgs(input, decompress, 'decompress')},
    HASH: {name: `hash${SPACE}`, func: (input) => validateCommandWithOneArg(input, hash, 'hash ')},

    OS: {name: `os `, func: validateOs}
};

export { commands }
