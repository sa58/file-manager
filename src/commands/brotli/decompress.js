import { createReadStream, createWriteStream } from 'fs';
import { access } from 'fs/promises';
import { basename, resolve, dirname } from 'path';
import { createBrotliDecompress  } from 'zlib';
import { pipeline } from 'stream/promises';
import { getCWD } from '../../lib/get-cwd.js';
import { printCWD } from '../../lib/print-cwd.js';

const decompress = async (pathToFile, pathToDest) => {
    try {
        const from = resolve(getCWD(), pathToFile);
        const to =  resolve(dirname(pathToFile), pathToDest, basename(pathToFile).replace('.br', ''));

        await access(from);

        const src = createReadStream(from);
        const dest = createWriteStream(to);
        const decompressViaBrotli = createBrotliDecompress();

        await pipeline(src, decompressViaBrotli, dest);

        printCWD();
    } catch(err) {
        throw err;
    }
}

export {
    decompress
}