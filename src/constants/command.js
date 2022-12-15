import { validateAdd } from '../validators/validate-add.js';
import { validateRename } from '../validators/validate-rename.js';

import {SPACE} from './space.js';

const commands = {
    UP: {name: `up`.getSpace, func: validateAdd},
    CD: {name: `cd`.getSpace, func: validateAdd},
    LS: {name: `ls`, func: validateAdd},
    
    CAT: {name: `cat${SPACE}`, func: validateAdd},
    ADD: {name: `add${SPACE}`, func: validateAdd},
    RN: {name: `rn${SPACE}`, func: validateRename},
    CP: {name: `cp${SPACE}`, func: validateAdd},
    MV: {name: `mv${SPACE}`, func: validateAdd},
    RM: {name: `rm${SPACE}`, func: validateAdd},

    COMPRESS: {name: `compress${SPACE}`, func: validateAdd},
    DECOMPRESS: {name: `decompress${SPACE}`, func: validateAdd},
    HASH: {name: `hash${SPACE}`, func: validateAdd},

    OS: {name: `os`, func: validateAdd},
    EOL: {name: `EOL`, func: validateAdd},
    CPUS: {name: `cpus`, func: validateAdd},
    HOMEDIR: {name: `homedir`, func: validateAdd},
    USERNAME: {name: `username`, func: validateAdd},
    ARCH:  {name: `architecture`, func: validateAdd},
};

export { commands }
