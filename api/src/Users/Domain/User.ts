import { ValidUserData } from './ValidUserData';
import { Name } from './Name';

export class User {
  // 1,Della,Cox,"4945 Lucky Duck Drive",412-862-8457,DellaDCox@superrito.com,10/12/1985
  id: string;
  name: Name;
  surname: string;
  address: string;
  phone: string;
  email: string;
  birthDate: string;
  constructor(user: ValidUserData) {

  }
}
