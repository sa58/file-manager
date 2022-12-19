import { exit, chdir } from 'node:process';

import { getUsername } from './get-username.js';
import { recognizeCommand } from './recognize-command.js';
import { printCWD } from '../lib/print-cwd.js';
import { getHomeDirectory } from '../lib/get-home-directory.js';

const initializeFileManager = (rl) => {
    const username = getUsername();

    const sayBy = () => {
        rl.write(`Thank you for using File Manager, ${username}!`);
    }

    rl.write(`Welcome to the File Manager, ${username}! \n`);
    chdir(getHomeDirectory());
    printCWD();

    rl.on('line', async (input) => {
        if (input === '.exit') {
            rl.close();
        }

        try {
            await recognizeCommand(input);
        } catch (err) {
            if (err.name === 'INVALID' || err.name === 'FAILED') {
                console.log(err.message);
            } else {
                console.log(`Operation failed. ${err.message}`);
            }

            rl.prompt();
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
