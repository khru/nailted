import {UserDTO} from "@/components/User/UserDTO";
export class UserPaginatorDTO {
  page: number;
  users: Array<UserDTO>;

  constructor(page: number, users: Array<UserDTO>) {
    this.page = page;
    this.users = users;
  }
}
