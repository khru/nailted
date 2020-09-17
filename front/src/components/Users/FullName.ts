import { StringAttribute } from "./StringAttribute";

export class FullName extends StringAttribute {
    private readonly EMPTY_ERROR_MESSAGE: string =
        "The attribute full name can not be empty";
    readonly value: string;

    constructor(name: string) {
        super();
        this.throwErrorIfEmptyAttribute(name, this.EMPTY_ERROR_MESSAGE);
        this.value = name;
    }

    equals(name: FullName): boolean {
        return this.value === name.value;
    }
}
