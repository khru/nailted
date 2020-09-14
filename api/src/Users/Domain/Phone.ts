import { StringAttribute } from './StringAttribute';
import { InvalidPhoneError } from './InvalidPhoneError';

export class Phone extends StringAttribute {
  private readonly VALID_PHONE_REGEX: RegExp = new RegExp(/[1-9][0-9]{2}-[0-9]{3}-[0-9]{4}$/gm);
  readonly phone: string;
  constructor(phone: string) {
    super();
    this.throwErrorIfEmptyAttribute(phone, 'The attribute email can not be empty');
    this.throwErrorIfInvalidPhoneNumber(phone);
    this.phone = phone;
  }

  throwErrorIfInvalidPhoneNumber(phone: string): void {
    if (!this.VALID_PHONE_REGEX.test(phone)) {
      throw new InvalidPhoneError('Invalid format on the phone number');
    }
  }
}