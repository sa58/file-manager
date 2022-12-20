import { homedir } from 'node:os';

const getHomeDirectory = () => {
    return homedir();
}

export {
    getHomeDirectory
}
