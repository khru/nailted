import { StringAttribute } from './StringAttribute';

export class Surname extends StringAttribute {
  readonly value: string;
  constructor(surname: string) {
    super();
    this.throwErrorIfEmptyAttribute(surname, 'The attribute surname can not be empty');
    this.value = surname;
  }
  equals(surname: Surname): boolean {
    return this.value === surname.value;
  }
}
