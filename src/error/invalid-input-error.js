export class InvalidInputError extends Error {
    constructor() {
        super();
        this.name = 'INVALID';
        this.message = 'Invalid input';
    }
}
