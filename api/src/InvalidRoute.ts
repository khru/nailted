class InvalidRoute extends Error {
  constructor(message: string | undefined) {
    super(`InvalidRoute: The route provided is invalid - data: ${message}`);
    Object.setPrototypeOf(this, InvalidRoute.prototype);
  }
}

export { InvalidRoute };
