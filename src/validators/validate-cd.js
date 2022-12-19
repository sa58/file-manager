import { InvalidInputError } from '../error/invalid-input-error.js';
import { findDoubleQuotes } from '../lib/find-double-quotes.js';
import { cd } from '../commands/nwd/cd.js';

const validateCd = async (input) => {
    try {
        const result = findDoubleQuotes(input);

        if (result === null) {
            const [_, dir] = input.split(`cd `);
            await cd(dir);
        }

        if (result !== null && result.length === 1) {
            const dir = result[0].replace(/"/g, '');
            await cd(dir);
        }

        if (result !== null && result.length > 1) {
            throw new InvalidInputError();
        }
    } catch (err) {
        throw err;
    }
}

export {
    validateCd
}
