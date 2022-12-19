import { arch, EOL, homedir, cpus, userInfo } from 'os';
import { InvalidInputError } from '../error/invalid-input-error.js';
import { printCWD } from '../lib/print-cwd.js';

const os = async (command) => {
    const map = {
        'eol': () => console.log(JSON.stringify(EOL)),
        'cpus': () => {
            const x = cpus().map((el, i) => {
                return `${i + 1} model: ${el.model}, speed: ${(el.speed / 1000).toFixed(2)}GHz`
            })

            console.log(x.join('\n'));
        },
        'homedir': () => console.log(homedir()),
        'username': () => console.log(userInfo().username),
        'architecture': () => console.log(arch()),
    }

    if (map[command.toLowerCase()]) {
        map[command.toLowerCase()]();
        printCWD();
    } else {
        throw new InvalidInputError();
    }
}

export {
    os
}