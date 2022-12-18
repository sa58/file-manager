import { InvalidInputError } from '../error/invalid-input-error.js';
import { findDoubleQuotes } from '../lib/find-double-quotes.js';
import { cat } from '../commands/file/cat.js';

const validateCat = async (input) => {
    try {
        const result = findDoubleQuotes(input);

        if (result === null) {
            const [_, fileName] = input.split(`cat `);

            if (fileName) {
                await cat(fileName);
            } else {
                throw new InvalidInputError();
            }
        }

        if (result && result.length === 1) {
            const [fileName] = result;
            const fileNameNoQuotes = fileName.replace(/"/g, '');

            if (fileNameNoQuotes) {
                await cat(fileNameNoQuotes);
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
    validateCat
}
