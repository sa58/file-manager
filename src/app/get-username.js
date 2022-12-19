import { argv } from 'node:process';

// import { NotAuthorizedException } from './error/not-authorized.js';

const USER_ARGUMENT = '--username';
const SEPARATOR = '=';

const getUsername = () => {
    const cliArguments = argv.slice(2);
    const [nameArgument] = cliArguments.filter(arg => arg.startsWith(USER_ARGUMENT))

    const [_, name] = nameArgument.split(SEPARATOR);
    // console.log(name)
    
    // if (!name) {
    //     throw new NotAuthorizedException();
    // }

    return name;

    // console.log('anon')
    // return 'Anonymous';
}

export {
    getUsername
};
