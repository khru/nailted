class EmptyAttributeError extends Error {
  constructor(message: string) {
    super(`EmptyAtributeError: ${message}`);
    Object.setPrototypeOf(this, EmptyAttributeError.prototype);
  }
}

export { EmptyAttributeError };
