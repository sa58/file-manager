import { createReadStream } from 'fs';
import { access, stat } from 'fs/promises';
import { resolve } from 'path';
import { OpearationFailedError } from '../../error/opearation-failed-error.js';
import { getCWD } from '../../lib/get-cwd.js';
import { printCWD } from '../../lib/print-cwd.js';

const cat = async (filePath) => {
    const path = resolve(getCWD(), filePath);
    await access(path);

    if(!(await stat(path)).isFile()) throw new OpearationFailedError();

    const readable = createReadStream(path, {encoding: 'utf8'});
    readable.on('error', () => {
        console.log('Operation failed');
    })

    for await (const chunk of readable) {
        console.log(chunk);
    }

    printCWD();
}

export {
    cat
}
