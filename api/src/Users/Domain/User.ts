import { ValidUserData } from './ValidUserData';
import { Name } from './Name';
import { Surname } from './Surname';
import { Id } from './Id';
import { Email } from './Email';
import { Phone } from './Phone';
import { Address } from './Address';
import { Birthdate } from './BirthDate';

export class User {
  // 1,Della,Cox,"4945 Lucky Duck Drive",412-862-8457,DellaDCox@superrito.com,10/12/1985
  id: Id;
  name: Name;
  surname: Surname;
  address: Address;
  phone: Phone;
  email: Email;
  birthDate: Birthdate;
  constructor(user: ValidUserData) {}
}
