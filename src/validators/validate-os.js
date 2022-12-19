import { InvalidInputError } from '../error/invalid-input-error.js';
import { findDoubleQuotes } from '../lib/find-double-quotes.js';
import { os } from '../commands/os.js';

const validateOs = async (input) => {
    if(input.includes('--')) {
        const [_, arg] = input.split('--');

        await os(arg);
    } else {
        throw new InvalidInputError();
    }
}

export {
    validateOs
}
