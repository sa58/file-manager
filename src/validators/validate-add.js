import { InvalidInputError } from '../error/invalid-input-error.js';
import { findDoubleQuotes } from '../lib/find-double-quotes.js';
import { add } from '../commands/add.js';

const validateAdd = async (input) => {
    try {
        const result = findDoubleQuotes(input);

        if (result === null) {
            const [_, fileName] = input.split(`add `);

            if(fileName) {
                await add(fileName);
            } else {
                throw new InvalidInputError();
            }
        }

        if (result && result.length === 1) {
            const [fileName] = result;
            const fileNameNoQuotes = fileName.replace(/"/g, '');

            if (fileNameNoQuotes) {
                await add(fileNameNoQuotes);
            } else {
                throw new InvalidInputError();
            } 
        }

        if (result && result.length > 1) {
            throw new OpearationFailedError();
        }
    } catch (err) {
        throw err;
    }
}

export {
    validateAdd
}
