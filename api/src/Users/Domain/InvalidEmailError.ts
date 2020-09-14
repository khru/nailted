class InvalidEmailError extends Error {
  constructor(message: string) {
    super(`InvalidEmailError: ${message}`);
    Object.setPrototypeOf(this, InvalidEmailError.prototype);
  }
}

export { InvalidEmailError };
