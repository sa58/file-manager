import { argv } from 'node:process';

const USER_ARGUMENT = '--username';
const SEPARATOR = '=';

const getUsername = () => {
    const cliArguments = argv.slice(2);
    const [nameArgument] = cliArguments.filter(arg => arg.startsWith(USER_ARGUMENT))

    const [_, name] = nameArgument.split(SEPARATOR);

    return name;
}

export {
    getUsername
};
