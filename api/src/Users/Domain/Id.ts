import { StringAttribute } from './StringAttribute';

export class Id extends StringAttribute {
  readonly id: string;

  constructor(id: string) {
    super();
    this.throwErrorIfEmptyAttribute(id, 'The attribute id can not be empty');
    this.id = id;
  }
}
