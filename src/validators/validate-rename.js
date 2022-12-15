import { InvalidInputError } from '../error/invalid-input-error.js';
import { OpearationFailedError } from '../error/opearation-failed-error.js';
import { findDoubleQuotes } from '../lib/find-double-quotes.js';
import { rn } from '../commands/rn.js';

const validateRename = async (input) => {
    try {
        const result = findDoubleQuotes(input);

        if (result === null) {
            const [_, pathToFile, newFileName] = input.split(' ');
            
            if (pathToFile && newFileName) {
                await rn(pathToFile, newFileName);
            } else {
                throw new InvalidInputError();
            }
        }

        if(result && result.length === 1) {
            const [match] = result;
            const [chunk_1, chunk_2] = input.split(match);

            if (chunk_1 === '') {
                const pathToFile = chunk_1.replace(`rn `, '').trim();
                const newFileName = match.replace(/"/g, '');

                if (pathToFile && newFileName) {
                    await rn(pathToFile, newFileName);
                } else {
                    throw new InvalidInputError();
                }
            }

            if (chunk_2 !== '') {
                const pathToFile = match.replace(/"/g, '');
                const newFileName = chunk_2.trim();

                if (pathToFile && newFileName) {
                    await rn(pathToFile, newFileName);
                } else {
                    throw new InvalidInputError();
                }
            }
        }

        if(result && result.length === 2) {
            const pathToFile = result[0].replace(/"/g, '');
            const newFileName = result[1].replace(/"/g, '');

            if(pathToFile && newFileName) await rn(pathToFile, newFileName);
            else throw new InvalidInputError();
        }

        if(result !== null && result.length > 2) throw new OpearationFailedError();

    } catch (err) {
        throw err;
    }
}

export {
    validateRename
}
