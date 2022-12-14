import { initializeFileManager } from './initialize-file-manager.js';

try {
    initializeFileManager();
} catch(exc) {
    console.log('start')
    console.log(exc);
}
