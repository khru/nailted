class InvalidBirthDateFormatError extends Error {
    constructor(message: string) {
        super(`InvalidBirthDateFormatError: ${message}`);
        Object.setPrototypeOf(this, InvalidBirthDateFormatError.prototype);
    }
}

export { InvalidBirthDateFormatError };
