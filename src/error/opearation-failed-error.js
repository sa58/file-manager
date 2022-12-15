export class OpearationFailedError extends Error {
    constructor() {
        super();
        this.name = 'Operation failed';
        this.message = 'Operation failed';
    }
}
