import { resolve } from 'path';
import { access, rename, stat } from 'fs/promises';
import { getCWD } from '../lib/get-cwd.js';
import { printCWD } from '../lib/print-cwd.js';

const rn = async (oldFileName, newFileName) => {
    try {
        const pathToOldFile = resolve(getCWD(), oldFileName);
        
        await access(pathToOldFile);
        if (!await (await stat(pathToOldFile)).isFile()) {
            throw new OpearationFailedError();
        }

        const newName = newFileName;
        await rename(pathToOldFile, newName);

        printCWD();
    } catch(err) {
        throw err;
    }
}

export {
    rn
}