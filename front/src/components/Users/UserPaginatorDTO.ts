import { User } from "@/components/Users/User";
export class UserPaginatorDTO {
    page: number;
    users: Array<User>;

    constructor(page: number, users: Array<User>) {
        this.page = page;
        this.users = users;
    }
}
