import { cwd } from 'node:process';

const printCWD = () => {
    console.log(`Current directory: ${cwd()} \n`);
}

export {
    printCWD
}
