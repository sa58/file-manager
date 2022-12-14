import { initializeFileManager } from './app/initialize-file-manager.js';

try {
    initializeFileManager();
} catch(exc) {
    console.log('start')
    console.log(exc);
}
