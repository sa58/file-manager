import { createReadStream } from 'fs';
import { access } from 'fs/promises';
import { resolve } from 'path';
import { pipeline } from 'stream/promises';
import { getCWD } from '../lib/get-cwd.js';
import { printCWD } from '../lib/print-cwd.js';

import { createHash } from 'crypto';

const hash = async (pathToFile) => {
    try {
        const f = resolve(getCWD(), pathToFile);
        await access(f);

        const r = createReadStream(f);
        const hash = createHash('sha256');

        await pipeline(r, hash);

        for await (const chunk of hash) {
            console.log(chunk.toString('hex'));
        }

        printCWD();
    } catch(err) {
        throw err;
    }
}

export {
    hash
}