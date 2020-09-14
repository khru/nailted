import { StringAttribute } from './StringAttribute';

export class Surname extends StringAttribute {
  readonly surname: string;
  constructor(surname: string) {
    super();
    this.throwErrorIfEmptyAttribute(surname, 'The attribute surname can not be empty');
    this.surname = surname;
  }
}
