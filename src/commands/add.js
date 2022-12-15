import { createWriteStream } from 'fs';
import { resolve } from 'path';
import { getCWD } from '../lib/get-cwd.js';
import { printCWD } from '../lib/print-cwd.js';

const add = async (fileName) => {
    try {
        const pathToFile = resolve(getCWD(), fileName);

        createWriteStream(pathToFile);
        printCWD();
    } catch(err) {
        throw err;
    }
}

export {
    add
}