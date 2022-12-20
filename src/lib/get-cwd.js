import { cwd } from 'node:process';

const getCWD = () => {
    return cwd();
}

export {
    getCWD
}