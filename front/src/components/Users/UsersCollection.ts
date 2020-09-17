import { UserPaginatorDTO } from "@/components/Users/UserPaginatorDTO";
import { User } from "@/components/Users/User";

export class UsersCollection {
    readonly usersOrderByFullName: User[] = [];
    readonly usersPerPage: Array<UserPaginatorDTO> = [];

    constructor(limitPerPage: number, users: Array<object>) {
        this.usersOrderByFullName = users
            .map(user => new User(user))
            .sort(User.compareByFullName());

        for (
            let i = 0, j = 0;
            i < this.usersOrderByFullName.length;
            i += limitPerPage, j++
        ) {
            this.usersPerPage.push(
                new UserPaginatorDTO(
                    j,
                    this.usersOrderByFullName.slice(i, i + limitPerPage)
                )
            );
        }
    }

    getUserPerPageNumber(page: number): UserPaginatorDTO {
        return this.usersPerPage[page];
    }

    filterUserBySearchTerm(searchTerm: string): UserPaginatorDTO {
        const DEFAULT_PAGE_NUMBER = 0;
        const usersFound = this.usersOrderByFullName.filter(user => {
            return (
                user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.fullName
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                user.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.address.toLowerCase().includes(searchTerm.toLowerCase())
            );
        });
        return new UserPaginatorDTO(DEFAULT_PAGE_NUMBER, usersFound);
    }
}
