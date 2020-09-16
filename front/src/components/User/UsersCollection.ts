import { UserPaginatorDTO } from "@/components/User/UserPaginatorDTO";
import { UserDTO } from "@/components/User/UserDTO";

export class UsersCollection {
    usersPerPage: Array<UserPaginatorDTO> = [];

    constructor(limitPerPage: number, users: Array<UserDTO>) {
        for (let i = 0, j = 0; i < users.length; i += limitPerPage, j++) {
            this.usersPerPage.push(
                new UserPaginatorDTO(j, users.slice(i, i + limitPerPage))
            );
        }
    }
}
