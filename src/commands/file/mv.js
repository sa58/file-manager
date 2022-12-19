import { resolve, basename } from 'path';
import { access, stat, unlink } from 'fs/promises';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { OpearationFailedError } from '../../error/opearation-failed-error.js';
import { getCWD } from '../../lib/get-cwd.js';
import { printCWD } from '../../lib/print-cwd.js';

const mv = async (pathFrom, pathTo) => {
    try {
        const from = resolve(getCWD(), pathFrom);

        await access(from);
        if(!(await stat(from)).isFile()) throw new OpearationFailedError();

        const fromFilePath = basename(from);

        let to = resolve(getCWD(), pathTo, fromFilePath);

        const r = createReadStream(from);
        const w = createWriteStream(to);

        await pipeline(r, w);
        await unlink(from);

        printCWD();
    } catch(err) {
        throw err;
    }
}

export {
    mv
}