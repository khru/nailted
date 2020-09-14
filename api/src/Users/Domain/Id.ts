import { StringAttribute } from './StringAttribute';

export class Id extends StringAttribute {
  readonly value: string;

  constructor(id: string) {
    super();
    this.throwErrorIfEmptyAttribute(id, 'The attribute id can not be empty');
    this.value = id;
  }

  equals(id: Id) {
    return this.value === id.value;
  }
}
