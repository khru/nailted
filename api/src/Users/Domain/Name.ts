import { StringAttribute } from './StringAttribute';

export class Name extends StringAttribute {
  private readonly EMPTY_ERROR_MESSAGE: string = 'The attribute name can not be empty';
  readonly name: string;

  constructor(name: string) {
    super();
    this.throwErrorIfEmptyAttribute(name, this.EMPTY_ERROR_MESSAGE);
    this.name = name;
  }
}
