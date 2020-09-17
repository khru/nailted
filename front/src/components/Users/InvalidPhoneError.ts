class InvalidPhoneError extends Error {
    constructor(message: string) {
        super(`InvalidPhoneError: ${message}`);
        Object.setPrototypeOf(this, InvalidPhoneError.prototype);
    }
}

export { InvalidPhoneError };
