import { resolve } from 'path';
import { chdir } from 'process';
import { getCWD } from '../../lib/get-cwd.js';
import { printCWD } from '../../lib/print-cwd.js';

const up = async () => {
    try {
        chdir(resolve(getCWD(), '..'));

        printCWD();
    } catch(err) {
        throw err;
    }
}

export {
    up
}