import { commands } from '../constants/command.js';
import { trimStart } from '../lib/trim-start.js';
// import { OpearationFailedError } from '../error/opearation-failed-error.js';
import { InvalidInputError } from '../error/invalid-input-error.js';

const recognizeCommand = async (input) => {
    try {
        const [commandForExecution] = Object.values(commands).filter(command => {
            if (trimStart(input).startsWith(command.name)) {
                return command;
            }
        })

        if(commandForExecution) {
           await commandForExecution.func(input);
        } else {
            throw new InvalidInputError();
        }
    } catch (exc) {
        throw exc;
    }
}

export {
    recognizeCommand
}
