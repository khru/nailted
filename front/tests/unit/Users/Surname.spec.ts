import { Surname } from "../../../src/components/Users/Surname";

const VALID_SURNAME = "Valverde Ramos";
const EMPTY_SURNAME = "";

describe("It should validate the surname attribute", () => {
    it("should create a valid surname", () => {
        expect(new Surname(VALID_SURNAME).value).toBe(VALID_SURNAME);
    });

    it("should fail on creating a surname", () => {
        expect(() => new Surname(EMPTY_SURNAME)).toThrowError(
            /^EmptyAtributeError.*/
        );
    });
});
