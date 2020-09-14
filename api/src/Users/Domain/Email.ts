import { StringAttribute } from './StringAttribute';
import { InvalidEmailError } from './InvalidEmailError';

export class Email extends StringAttribute {
  readonly email: string;
  constructor(email: string) {
    super();
    this.throwErrorIfEmptyAttribute(email, 'The attribute email can not be empty');
    this.throwErrorIfInvalidEmail(email);
    this.email = email;
  }

  throwErrorIfInvalidEmail(email: string): void {
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
      throw new InvalidEmailError('Invalid format on the email address');
    }
  }
}
