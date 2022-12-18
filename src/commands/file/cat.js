import { createReadStream, createWriteStream } from 'fs';
import { access, stat } from 'fs/promises';
import { basename, resolve } from 'path';
import { stdout } from 'process';
import { pipeline } from 'stream/promises';
import zlib from 'zlib';
import util from 'node:util';
import { createBrotliCompress, createBrotliDecompress } from 'zlib';
import { getCWD } from '../../lib/get-cwd.js';
import { printCWD } from '../../lib/print-cwd.js';

const cat = async (filePath) => {
    try {
       
        const path = resolve(getCWD(), filePath);
        // console.log(path);
        // await access(path);

        // if(!await (await stat(path)).isFile()) throw new OpearationFailedError();
        // // const pipelineAsync = util.promisify(pipe);

        // const readable = createReadStream(path, {encoding: 'utf8'});
        // // readable.pipe(stdout).on('end', () => {
        // //     console.log('end')
        // //     // readable.close();
            
        // // })

        // // await pipelineAsync(createReadStream(path), stdout);
        // // // await naiveBar();
        // for await (const chunk of readable) {
        //     console.log(chunk);
        // }

           
        const from = path;
        await access(from);

        const pathTo = resolve(getCWD(), './111');
        await access(pathTo);

        const fileName = basename(from);
        const to =  resolve(pathTo, `${fileName}.br`);

        // await access(to);

        const src = createReadStream(from);
        const dest = createWriteStream(to);
        const compressViaBrotli = createBrotliCompress();

        // src.pipe(compressViaBrotli).pipe(dest);

        await pipeline(src, compressViaBrotli, dest);
        // showDirInfo();

        
        printCWD();
        
    } catch(err) {
        throw err;
    }
}

export {
    cat
}