import { addFile } from '../lib/files/add-file.js'
import {SPACE} from './space.js';

const commands = {
    UP: {name: `up`.getSpace, func: addFile},
    CD: {name: `cd`.getSpace, func: addFile},
    LS: {name: `ls`, func: addFile},
    
    CAT: {name: `cat${SPACE}`, func: addFile},
    ADD: {name: `add${SPACE}`, func: addFile},
    RN: {name: `rn${SPACE}`, func: addFile},
    CP: {name: `cp${SPACE}`, func: addFile},
    MV: {name: `mv${SPACE}`, func: addFile},
    RM: {name: `rm${SPACE}`, func: addFile},

    COMPRESS: {name: `compress${SPACE}`, func: addFile},
    DECOMPRESS: {name: `decompress${SPACE}`, func: addFile},
    HASH: {name: `hash${SPACE}`, func: addFile},

    OS: {name: `os`, func: addFile},
    EOL: {name: `EOL`, func: addFile},
    CPUS: {name: `cpus`, func: addFile},
    HOMEDIR: {name: `homedir`, func: addFile},
    USERNAME: {name: `username`, func: addFile},
    ARCH:  {name: `architecture`, func: addFile},
};

export { commands }
