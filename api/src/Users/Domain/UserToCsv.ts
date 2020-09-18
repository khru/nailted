import { ToCSV } from './ToCSV';
import { User } from './User';

export class UserToCsv implements ToCSV {
  toCSV(user: User): object {
    // 30,Donald,Schmidt,"1925 Mattson Street",503-431-9711,DonaldBSchmidt@rhyta.com,11/27/1952
    return {
      id: user.id,
      name: user.name,
      surname: user.surname,
      address: user.address,
      phone: user.phone,
      email: user.email,
      birthdate: user.birthDate,
    };
  }
}
