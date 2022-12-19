import { InvalidInputError } from '../error/invalid-input-error.js';
import { findDoubleQuotes } from '../lib/find-double-quotes.js';
import { hash } from '../commands/hash.js';

const validateHash = async (input) => {
    try {
        const result = findDoubleQuotes(input);

        if(result === null) {
            const [_, fileName] = input.split(`hash `);
            await hash(fileName);
        }

        if(result && result.length === 1) {
            const fileName = result[0].replace(/"/g, '');
            await hash(fileName);
        }

        if(result !== null && result.length > 1) throw new InvalidInputError();

    } catch (err) {
        throw err;
    }
}

export {
    validateHash
}
