import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output, exit } from 'node:process';

import { getUsername } from './get-username.js';

const initializeFileManager = () => {
    const rl = readline.createInterface({input, output, prompt: '> ', crlfDelay: Infinity });

    const username = getUsername();

    const sayBy = () => {
        rl.write(`Thank you for using File Manager, ${username}!`);
    }

    rl.write(`Welcome to the File Manager, ${username}! \n`);

    rl.on('line', async (input) => {
        if (input === '.exit') {
            rl.close();
        }

        rl.prompt();
    });

    rl.prompt();

    rl.on('SIGINT', () => {
        rl.close();
        sayBy();
    });

    rl.on('close', () => {
        sayBy();
        exit(1);
    });
}

export {
    initializeFileManager
}
