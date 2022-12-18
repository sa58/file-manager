import { InvalidInputError } from '../error/invalid-input-error.js';
import { findDoubleQuotes } from '../lib/find-double-quotes.js';
import { cp } from '../commands/file/cp.js';

const validateCp = async (input) => {
    try {
        const result = findDoubleQuotes(input);

        if(result === null) {
            const [_, pathToFile, newPathFile] = input.split(' ');

            if (pathToFile && newPathFile) {
                await cp(pathToFile, newPathFile);
            } else {
                throw new InvalidInputError();
            }
        }

        if (result && result.length === 1) {
            const [match] = result;
            const [chunk_1, chunk_2] = input.split(match);

            if (chunk_2 !== '') {
                const pathToFile = match.trim().replace(/"/g, '');
                const newPathFile = chunk_2.trim();

                if (pathToFile && newPathFile) {
                    await cp(pathToFile, newPathFile);
                } else {
                    throw new InvalidInputError();
                }
            }

            if (chunk_2 === '') {
                const pathToFile = chunk_1.replace('cp', '').trim();
                const newPathFile = match.trim().replace(/"/g, '');

                if (pathToFile && newPathFile) {
                    await cp(pathToFile, newPathFile);
                } else {
                    throw new InvalidInputError();
                }
            }
        }

        if(result && result.length === 2) {
            const pathToFile = result[0].replace(/"/g, '');
            const newPathFile = result[1].replace(/"/g, '');

            if (pathToFile && newPathFile) {
                await cp(pathToFile, newPathFile);
            } else {
                throw new InvalidInputError();
            }
        }

        if (result !== null && result.length > 2) {
            throw new InvalidInputError();
        }

    } catch (err) {
        throw err;
    }
}

export {
    validateCp
}
