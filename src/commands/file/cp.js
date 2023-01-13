import { basename, extname, resolve } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { access } from 'fs/promises';
import { pipeline } from 'stream/promises';
import { getCWD } from '../../lib/get-cwd.js';
import { printCWD } from '../../lib/print-cwd.js';

const cp = async (pathToFile, pathToNewDirectory) => {
    const fileFrom = resolve(getCWD(), pathToFile);
    await access(fileFrom);
    const nameFrom = basename(fileFrom);

    let fileDest = resolve(getCWD(), pathToNewDirectory, `${nameFrom}`);

    if (fileFrom === fileDest) {
        const ext = extname(fileDest);

        if (ext === '') {
            fileDest = fileDest+`-copy-${Date.now()}`;
        } else {
            fileDest = fileDest.replace(ext, `-copy-${Date.now()}${ext}`);
        }
    }

    const read = createReadStream(fileFrom);
    const write = createWriteStream(fileDest);

    await pipeline(read, write);

    printCWD();
}

export {
    cp
}
