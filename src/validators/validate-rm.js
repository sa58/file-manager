import { InvalidInputError } from '../error/invalid-input-error.js';
import { findDoubleQuotes } from '../lib/find-double-quotes.js';
import { rm } from '../commands/rm.js';

const validateRm = async (input) => {
    try {
        const result = findDoubleQuotes(input);

        if (result === null) {
            const [_, fileName] = input.split(` `);
            await rm(fileName.trim());
        }

        if (result && result.length === 1) {
            const [match] = result;
            const fileName = match.replace(/"/g, '');
            await rm(fileName);
        }

        if (result !== null && result.length > 1) {
            throw new InvalidInputError();
        }
    } catch (err) {
        throw err;
    }
}

export {
    validateRm
}
