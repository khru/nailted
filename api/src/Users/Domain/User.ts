import { ValidUserData } from './ValidUserData';
import { Name } from './Name';
import { Surname } from './Surname';
import { Id } from './Id';
import { Email } from './Email';
import { Phone } from './Phone';
import { Address } from './Address';
import { Birthdate } from './BirthDate';
import { InvalidUserError } from './InvalidUserError';
import { ToJSON } from './ToJSON';

export class User implements ToJSON {
  id: Id;
  name: Name;
  surname: Surname;
  address: Address;
  phone: Phone;
  email: Email;
  birthDate: Birthdate;

  constructor(user: ValidUserData) {
    // TODO: Refactor it should be able to handle multiple errors
    try {
      this.id = new Id(user.id);
      this.name = new Name(user.name);
      this.surname = new Surname(user.surname);
      this.address = new Address(user.address);
      this.phone = new Phone(user.phone);
      this.email = new Email(user.email);
      this.birthDate = new Birthdate(user.birthdate);
    } catch (userCreationError) {
      throw new InvalidUserError(
        `An Error has occurred creating a new User with data ${JSON.stringify(
          user,
        )} - ${userCreationError}`,
      );
    }
  }

  equals(user: ValidUserData): boolean {
    const comparator = new User(user);
    return (
      this.id.equals(comparator.id) &&
      this.name.equals(comparator.name) &&
      this.surname.equals(comparator.surname) &&
      this.birthDate.equals(comparator.birthDate) &&
      this.email.equals(comparator.email) &&
      this.phone.equals(comparator.phone) &&
      this.address.equals(comparator.address)
    );
  }

  toJSON(): object {
    return JSON.parse(this.toString());
  }

  toString(): string {
    return JSON.stringify({
      id: this.id.value,
      name: this.name.value,
      surname: this.surname.value,
      address: this.address.value,
      phone: this.phone.value,
      email: this.email.value,
      birthDate: this.birthDate.value,
    });
  }
}
