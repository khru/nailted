import { StringAttribute } from './StringAttribute';

export class Address extends StringAttribute {
  readonly address: string;

  constructor(address: string) {
    super();
    this.throwErrorIfEmptyAttribute(address, 'The attribute address can not be empty');
    this.address = address;
  }
}
