import { ValidUserData } from './ValidUserData';
import { Name } from './Name';
import { Surname } from './Surname';
import { Id } from './Id';
import { Email } from './Email';
import { Phone } from './Phone';
import { Address } from './Address';
import { BirthDate } from './BirthDate';
import { InvalidUserError } from './InvalidUserError';
import { ToJSON } from './ToJSON';

export class User implements ToJSON {
  _id: Id;
  _name: Name;
  _surname: Surname;
  _address: Address;
  _phone: Phone;
  _email: Email;
  _birthDate: BirthDate;

  constructor(user: ValidUserData) {
    // TODO: Refactor it should be able to handle multiple errors
    try {
      this.id = user.id;
      this.name = user.name;
      this.surname = user.surname;
      this.address = user.address;
      this.phone = user.phone;
      this.email = user.email;
      this.birthDate = user.birthdate;
    } catch (userCreationError) {
      throw new InvalidUserError(
        `An Error has occurred creating a new User with data ${JSON.stringify(
          user,
        )} - ${userCreationError}`,
      );
    }
  }

  get id(): string {
    return this._id.value;
  }

  set id(id: string) {
    this._id = new Id(id);
  }

  get name(): string {
    return this._name.value;
  }

  set name(name: string) {
    this._name = new Name(name);
  }

  get surname(): string {
    return this._surname.value;
  }

  set surname(surname: string) {
    this._surname = new Surname(surname);
  }

  get address(): string {
    return this._address.value;
  }

  set address(address: string) {
    this._address = new Address(address);
  }

  get phone(): string {
    return this._phone.value;
  }

  set phone(phone: string) {
    this._phone = new Phone(phone);
  }

  get email(): string {
    return this._email.value;
  }

  set email(email: string) {
    this._email = new Email(email);
  }

  get birthDate(): string {
    return this._birthDate.value;
  }

  set birthDate(birthDate: string) {
    this._birthDate = new BirthDate(birthDate);
  }

  equals(user: ValidUserData): boolean {
    const comparator = new User(user);
    return (
      this._id.equals(comparator._id) &&
      this._name.equals(comparator._name) &&
      this._surname.equals(comparator._surname) &&
      this._birthDate.equals(comparator._birthDate) &&
      this._email.equals(comparator._email) &&
      this._phone.equals(comparator._phone) &&
      this._address.equals(comparator._address)
    );
  }

  toJSON(): object {
    return JSON.parse(this.toString());
  }

  toString(): string {
    return JSON.stringify({
      id: this.id,
      name: this.name,
      surname: this.surname,
      address: this.address,
      phone: this.phone,
      email: this.email,
      birthdate: this.birthDate,
    });
  }
}
