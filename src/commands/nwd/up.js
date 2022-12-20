import { resolve } from 'path';
import { chdir } from 'process';
import { getCWD } from '../../lib/get-cwd.js';
import { printCWD } from '../../lib/print-cwd.js';

const up = async () => {
    chdir(resolve(getCWD(), '..'));

    printCWD();
}

export {
    up
}