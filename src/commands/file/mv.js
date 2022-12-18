import { resolve, basename } from 'path';
import { access, stat, unlink } from 'fs/promises';
import { createReadStream, createWriteStream } from 'fs';
import { getCWD } from '../../lib/get-cwd.js';
import { printCWD } from '../../lib/print-cwd.js';

const mv = async (pathFrom, pathTo) => {
    try {
        const from = resolve(getCWD(), pathFrom);
        await access(from);
        if(!await (await stat(from)).isFile()) throw new OpearationFailedError();

        const fromFilePath = basename(from);


        let to = resolve(getCWD(), pathTo, fromFilePath);


        const r = createReadStream(from);
        const w = createWriteStream(to);
        w.on('error', err => {
            if (err.code === 'EPERM') {
                console.log('Operation failed. No permission');
            }
        })

        r.pipe(w).on('finish', async () => {
            await unlink(from);
        })
        printCWD();
    } catch(err) {
        throw err;
    }
}

export {
    mv
}