import { validateAdd } from '../validators/validate-add.js';
import { validateRn } from '../validators/validate-rn.js';
import { validateCp } from '../validators/validate-cp.js';
import { validateMv } from '../validators/validate-mv.js';
import { validateRm } from '../validators/validate-rm.js';
import { validateCat } from '../validators/validate-cat.js';
import { validateCompress } from '../validators/validate-compress.js';
import { validateDecompress } from '../validators/validate-decompress.js';
import {SPACE} from './space.js';

const commands = {
    UP: {name: `up`.getSpace, func: validateAdd},
    CD: {name: `cd`.getSpace, func: validateAdd},
    LS: {name: `ls`, func: validateAdd},
    
    CAT: {name: `cat${SPACE}`, func: validateCat},
    ADD: {name: `add${SPACE}`, func: validateAdd},
    RN: {name: `rn${SPACE}`, func: validateRn},
    CP: {name: `cp${SPACE}`, func: validateCp},
    MV: {name: `mv${SPACE}`, func: validateMv},
    RM: {name: `rm${SPACE}`, func: validateRm},

    COMPRESS: {name: `compress${SPACE}`, func: validateCompress},
    DECOMPRESS: {name: `decompress${SPACE}`, func: validateDecompress},
    HASH: {name: `hash${SPACE}`, func: validateAdd},

    OS: {name: `os`, func: validateAdd},
    EOL: {name: `EOL`, func: validateAdd},
    CPUS: {name: `cpus`, func: validateAdd},
    HOMEDIR: {name: `homedir`, func: validateAdd},
    USERNAME: {name: `username`, func: validateAdd},
    ARCH:  {name: `architecture`, func: validateAdd},
};

export { commands }
