export class UserDTO {
  id: string;
  fullName: string;
  name: string;
  surname: string;
  address: string;
  phone: string;
  email: string;
  birthDate: string;

  constructor(user: any) {
    this.id = user.id;
    this.fullName = `${user.name} ${user.surname}`;
    this.name = user.name;
    this.surname = user.surname;
    this.address = user.address;
    this.phone = user.phone;
    this.email = user.email;
    this.birthDate = user.birthDate;
  }

  static compareByFullName(): Function {
    return (a: UserDTO, b: UserDTO) => {
      const bFullName = b['fullName'].toUpperCase();
      const aFullName = a['fullName'].toUpperCase();
      return aFullName > bFullName ? 1 : aFullName < bFullName ? -1 : 0;
    };
  }
}
