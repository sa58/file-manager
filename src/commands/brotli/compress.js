import { createReadStream, createWriteStream } from 'fs';
import { access } from 'fs/promises';
import { basename, resolve } from 'path';
import { createBrotliCompress } from 'zlib';
import { pipeline } from 'stream/promises';
import { getCWD } from '../../lib/get-cwd.js';
import { printCWD } from '../../lib/print-cwd.js';

const compress = async (pathToFile, pathToDest) => {
    const from = resolve(getCWD(), pathToFile);
    await access(from);

    const pathTo = resolve(pathToDest);
    await access(pathTo);

    const fileName = basename(from);
    const to =  resolve(pathToDest, `${fileName}.br`);

    const src = createReadStream(from);
    const dest = createWriteStream(to);
    const compressViaBrotli = createBrotliCompress();

    await pipeline(src, compressViaBrotli, dest);

    printCWD();
}

export {
    compress
}
