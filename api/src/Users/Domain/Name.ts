import { EmptyAttributeError } from './EmptyAttributeError';

export class Name {
  private readonly EMPTY_ERROR_MESSAGE: string = 'The attribute name can not be empty';
  readonly name: string;
  constructor(name: string) {
    this.throwErrorIfNotValid(name);
    this.name = name;
  }

  throwErrorIfNotValid(name: string) {
    if (name.trim().length === 0) {
      throw new EmptyAttributeError(this.EMPTY_ERROR_MESSAGE);
    }
  }
}
