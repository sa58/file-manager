import { readdir, lstat } from 'fs/promises';
import { getCWD } from '../../lib/get-cwd.js';
import { printCWD } from '../../lib/print-cwd.js';

const ls = async () => {
    try {
        const directory = await readdir(getCWD());

        const arr = [];

        for (const file of directory) {
            if((await lstat(file)).isSymbolicLink()) {
                arr.push({name: file, type: 'link'})
            }

            if((await lstat(file)).isDirectory()) {
                arr.push({name: file, type: 'directory'})
            }

            if((await lstat(file)).isFile()) {
                arr.push({name: file, type: 'file'})
            }
        }
    
        console.table(arr);

        printCWD();
    } catch(err) {
        throw err;
    }
}

export {
    ls
}
