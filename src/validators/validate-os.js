import { InvalidInputError } from '../error/invalid-input-error.js';
import { findDoubleQuotes } from '../lib/find-double-quotes.js';
import { os } from '../commands/os.js';

const validateOs = async (input) => {
    try {
        if(input.includes('--')) {
            const [_, arg] = input.split('--');

            await os(arg);
        } else {
            throw new InvalidInputError();
        }
    } catch (err) {
        throw err;
    }
}

export {
    validateOs
}
