import { commands } from '../constants/command.js';
import { trimStart } from '../lib/trim-start.js';

const recognizeCommand = (input) => {
    const [commandForExecution] = Object.values(commands)
        .filter(command => {
            if (trimStart(input).startsWith(command.name)) {
                return command;
            }
        })
    
    console.log(commandForExecution);
    commandForExecution.func(input);
}

export {
    recognizeCommand
}
