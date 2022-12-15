export class InvalidInputError extends Error {
    constructor() {
        super();
        this.name = 'Invalid input';
        this.message = 'Invalid input';
    }
}
