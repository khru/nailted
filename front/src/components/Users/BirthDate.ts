import { StringAttribute } from "./StringAttribute";
import { InvalidBirthDateFormatError } from "./InvalidBirthDateFormatError";

export class Birthdate extends StringAttribute {
    private readonly VALID_DATE_REGEX: RegExp = new RegExp(
        /^[0-1]{0,1}[0-9]{1}\/[0-3]{0,1}[0-9]{1}\/[0-9]{4}$/gm
    );
    readonly value: string;

    constructor(birthDate: string) {
        super();
        this.throwErrorIfEmptyAttribute(
            birthDate,
            "The birth date can not be empty"
        );
        this.throwErrorIfInvalidBirthDateFormat(birthDate);
        this.value = birthDate;
    }
    throwErrorIfInvalidBirthDateFormat(birthDate: string): void {
        if (!this.VALID_DATE_REGEX.test(birthDate)) {
            throw new InvalidBirthDateFormatError(
                "Invalid format on the date of birth"
            );
        }
    }

    equals(birthDate: Birthdate): boolean {
        return this.value === birthDate.value;
    }
}
