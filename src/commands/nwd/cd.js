import { resolve } from 'path';
import { chdir } from 'process';
import { access, stat } from 'fs/promises';
import { getCWD } from '../../lib/get-cwd.js';
import { printCWD } from '../../lib/print-cwd.js';

const cd = async (dir) => {
    try {
        const to = resolve(getCWD(), dir);

        await access(to);

        if (!await (await stat(to)).isDirectory()) {
            throw new OpearationFailedError();
        }

        chdir(to);

        printCWD();
    } catch(err) {
        throw err;
    }
}

export {
    cd
}