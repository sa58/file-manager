import { resolve } from 'path';
import { access, rename, stat } from 'fs/promises';
import { OpearationFailedError } from '../../error/opearation-failed-error.js';
import { getCWD } from '../../lib/get-cwd.js';
import { printCWD } from '../../lib/print-cwd.js';

const rn = async (oldFileName, newFileName) => {
    try {
        const pathToOldFile = resolve(getCWD(), oldFileName);

        await access(pathToOldFile);
        if (!(await stat(pathToOldFile)).isFile()) {
            throw new OpearationFailedError();
        }

        await rename(pathToOldFile, newFileName);

        printCWD();
    } catch(err) {
        throw err;
    }
}

export {
    rn
}