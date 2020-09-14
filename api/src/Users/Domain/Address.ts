import { StringAttribute } from './StringAttribute';

export class Address extends StringAttribute {
  readonly value: string;

  constructor(address: string) {
    super();
    this.throwErrorIfEmptyAttribute(address, 'The attribute address can not be empty');
    this.value = address;
  }

  equals(address: Address): boolean {
    return this.value === address.value;
  }
}
