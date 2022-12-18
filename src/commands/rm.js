import { resolve } from 'path';
import { access, unlink } from 'fs/promises';
import { getCWD } from '../lib/get-cwd.js';
import { printCWD } from '../lib/print-cwd.js';

const rm = async (pathToFile) => {
    try {
        const fullPathToFile = resolve(getCWD(), pathToFile);
        await access(fullPathToFile);

        await unlink(fullPathToFile);
        printCWD();
    } catch(err) {
        throw err;
    }
}

export {
    rm
}