import { commands } from '../constants/command.js';
import { trimStart } from '../lib/trim-start.js';
import { InvalidInputError } from '../error/invalid-input-error.js';

const recognizeCommand = async (input) => {
    const [commandForExecution] = Object.values(commands).filter(command => {
        if (trimStart(input).startsWith(command.name)) {
            return command;
        }
    })

    if (commandForExecution) {
        await commandForExecution.func(input);
    } else {
        throw new InvalidInputError();
    }
}

export {
    recognizeCommand
}
