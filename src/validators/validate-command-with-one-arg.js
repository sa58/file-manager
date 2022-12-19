import { InvalidInputError } from '../error/invalid-input-error.js';
import { findDoubleQuotes } from '../lib/find-double-quotes.js';

const validateCommandWithOneArg = async (input, command, commandName) => {
    try {
        const result = findDoubleQuotes(input);

        if (result === null) {
            const [_, fileName] = input.split(`${commandName}`);

            if (fileName) {
                await command(fileName.trim());
            } else {
                throw new InvalidInputError();
            }
        }

        if (result && result.length === 1) {
            const [fileName] = result;
            const fileNameNoQuotes = fileName.replace(/"/g, '');

            if (fileNameNoQuotes) {
                await command(fileNameNoQuotes.trim());
            } else {
                throw new InvalidInputError();
            } 
        }

        if (result && result.length > 1) {
            throw new InvalidInputError();
        }
    } catch (err) {
        throw err;
    }
}

export {
    validateCommandWithOneArg
}
