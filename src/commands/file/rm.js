import { resolve } from 'path';
import { access, unlink } from 'fs/promises';
import { getCWD } from '../../lib/get-cwd.js';
import { printCWD } from '../../lib/print-cwd.js';

const rm = async (pathToFile) => {
    const fullPathToFile = resolve(getCWD(), pathToFile);
    await access(fullPathToFile);

    await unlink(fullPathToFile);
    printCWD();
}

export {
    rm
}