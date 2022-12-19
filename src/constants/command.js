import { validateAdd } from '../validators/validate-add.js';
import { validateRn } from '../validators/validate-rn.js';
import { validateCp } from '../validators/validate-cp.js';
import { validateMv } from '../validators/validate-mv.js';
import { validateRm } from '../validators/validate-rm.js';
import { validateCat } from '../validators/validate-cat.js';
import { validateCompress } from '../validators/validate-compress.js';
import { validateDecompress } from '../validators/validate-decompress.js';
import { validateHash } from '../validators/validate-hash.js';
import { up } from '../commands/nwd/up.js';
import { ls } from '../commands/nwd/ls.js';
import { validateCd } from '../validators/validate-cd.js';
import { validateOs } from '../validators/validate-os.js';

import {SPACE} from './space.js';

const commands = {
    UP: {name: 'up', func: up},
    CD: {name: `cd${SPACE}`, func: validateCd},
    LS: {name: 'ls', func: ls},
    
    CAT: {name: `cat${SPACE}`, func: validateCat},
    ADD: {name: `add${SPACE}`, func: validateAdd},
    RN: {name: `rn${SPACE}`, func: validateRn},
    CP: {name: `cp${SPACE}`, func: validateCp},
    MV: {name: `mv${SPACE}`, func: validateMv},
    RM: {name: `rm${SPACE}`, func: validateRm},

    COMPRESS: {name: `compress${SPACE}`, func: validateCompress},
    DECOMPRESS: {name: `decompress${SPACE}`, func: validateDecompress},
    HASH: {name: `hash${SPACE}`, func: validateHash},

    OS: {name: `os `, func: validateOs}
};

export { commands }
