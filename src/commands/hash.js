import { createReadStream } from 'fs';
import { access } from 'fs/promises';
import { resolve } from 'path';
import { pipeline } from 'stream/promises';
import { getCWD } from '../lib/get-cwd.js';
import { printCWD } from '../lib/print-cwd.js';

import { createHash } from 'crypto';

const hash = async (pathToFile) => {
    const f = resolve(getCWD(), pathToFile);
    await access(f);

    const readable = createReadStream(f);
    const hash = createHash('sha256');

    await pipeline(readable, hash);

    for await (const chunk of hash) {
        console.log(chunk.toString('hex'));
    }

    printCWD();
}

export {
    hash
}
