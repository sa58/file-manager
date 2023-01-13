import { createWriteStream } from 'fs';
import { resolve } from 'path';
import { getCWD } from '../../lib/get-cwd.js';
import { printCWD } from '../../lib/print-cwd.js';

async function createFile(pathToFile) {
    return new Promise((resolve, reject) => {
        const writable = createWriteStream(pathToFile);
        writable.end();

        function res() {
            resolve('qw');
        }

        writable.on('finish', res);
        writable.on('end', res);
        writable.on('error', (error) => {
            reject(error);
        });
    })
};

const add = async (fileName) => {
    const pathToFile = resolve(getCWD(), fileName);

    await createFile(pathToFile)
        
    printCWD();
}

export {
    add
}
