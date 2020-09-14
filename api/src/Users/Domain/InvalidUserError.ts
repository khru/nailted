class InvalidUserError extends Error {
  constructor(message: string) {
    super(`InvalidUserError: ${message}`);
    Object.setPrototypeOf(this, InvalidUserError.prototype);
  }
}

export { InvalidUserError };
