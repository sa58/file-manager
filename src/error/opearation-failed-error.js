export class OpearationFailedError extends Error {
    constructor() {
        super();
        this.name = 'FAILED';
        this.message = 'Operation failed';
    }
}
