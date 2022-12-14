class NotAuthorizedException extends Error {
    constructor() {
        super();
        this.message = '---';
    }
}

export { NotAuthorizedException }
