import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { initializeFileManager } from './app/initialize-file-manager.js';

const rl = readline.createInterface({input, output, prompt: '> ', crlfDelay: Infinity });

try {
    initializeFileManager(rl);
} catch(exc) {
    console.log('---------------------------------------------------')
    console.log(exc.message);

    rl.prompt();
}
