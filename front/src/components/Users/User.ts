import { Id } from "@/components/Users/Id";
import { Name } from "@/components/Users/Name";
import { Surname } from "@/components/Users/Surname";
import { Address } from "@/components/Users/Address";
import { Phone } from "@/components/Users/Phone";
import { Email } from "@/components/Users/Email";
import { Birthdate } from "@/components/Users/BirthDate";
import { FullName } from "@/components/Users/FullName";
import { ToJSON } from "@/components/Users/ToJSON";
import { InvalidUserError } from "@/components/Users/InvalidUserError";

export class User implements ToJSON {
    private _id?: Id;
    private _fullName?: FullName;
    private _name?: Name;
    private _surname?: Surname;
    private _address?: Address;
    private _phone?: Phone;
    private _email?: Email;
    private _birthDate?: Birthdate;

    constructor(user: any) {
        try {
            this.id = user.id;
            this.fullName = `${user.name.trim()} ${user.surname.trim()}`;
            this.name = `${user.name.trim()}`;
            this.surname = `${user.surname.trim()}`;
            this.address = `${user.address.trim()}`;
            this.phone = `${user.phone.trim()}`;
            this.email = `${user.email.trim()}`;
            this.birthDate = `${user.birthdate.trim()}`;
        } catch (userCreationError) {
            throw new InvalidUserError(
                `An Error has occurred creating a new User with data ${JSON.stringify(
                    user
                )} - ${userCreationError}`
            );
        }
    }

    static compareByFullName(): Function {
        return (a: User, b: User) => {
            const bFullName = b.fullName ? b.fullName.toUpperCase() : "";
            const aFullName = a.fullName ? a.fullName.toUpperCase() : "";
            return aFullName > bFullName ? 1 : aFullName < bFullName ? -1 : 0;
        };
    }

    get id(): string | undefined {
        return this._id ? this._id.value : undefined;
    }

    set id(id: string | undefined) {
        if (!id) {
            id = `${Math.random()
                .toString(36)
                .slice(2)}${(0|Math.random()*9e6).toString(36)}`;
        }
        this._id = new Id(id);
    }

    get fullName(): string | undefined {
        return this._fullName ? this._fullName.value : undefined;
    }

    set fullName(fullName: string | undefined) {
        this._fullName = new FullName(fullName ? fullName : "");
    }

    get name(): string | undefined {
        return this._name ? this._name.value : undefined;
    }

    set name(name: string | undefined) {
        this._name = new Name(name ? name : "");
    }
    get surname(): string | undefined {
        return this._surname ? this._surname.value : undefined;
    }

    set surname(surname: string | undefined) {
        this._surname = new Surname(surname ? surname : "");
    }

    get address(): string | undefined {
        return this._address ? this._address.value : undefined;
    }

    set address(address: string | undefined) {
        this._address = new Address(address ? address : "");
    }
    get phone(): string | undefined {
        return this._phone ? this._phone.value : undefined;
    }

    set phone(phone: string | undefined) {
        this._phone = new Phone(phone ? phone : "");
    }
    get email(): string | undefined {
        return this._email ? this._email.value : undefined;
    }

    set email(email: string | undefined) {
        this._email = new Email(email ? email : "");
    }

    get birthDate(): string | undefined {
        return this._birthDate ? this._birthDate.value : undefined;
    }

    set birthDate(birthDate: string | undefined) {
        this._birthDate = new Birthdate(
            this.convertHTMLDateToBirthDateFormat(birthDate)
        );
    }

    private convertHTMLDateToBirthDateFormat(
        birthDate: string | undefined
    ): string {
        if (undefined === birthDate) {
            return "";
        }
        if (!birthDate.includes("-")) {
            return birthDate;
        }
        const [year, month, day] = birthDate.split("-");
        return `${day}/${month}/${year}`;
    }

    toJSON(): object {
        return JSON.parse(
            `{ "id": "${this.id}", "name": "${this.name}", "surname": "${this.surname}", "address": "${this.address}", "email": "${this.email}", "phone": "${this.phone}", "birthdate": "${this.birthDate}", "fullName": "${this.fullName}"}`
        );
    }
}
