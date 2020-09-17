import { Address } from "@/components/Users/Address";

const VALID_ID = "111 Elm street";
const EMPTY_ID = "";

describe("It should validate the Address attribute", () => {
    it("should create a valid Address", () => {
        expect(new Address(VALID_ID).value).toBe(VALID_ID);
    });

    it("should fail on creating a Address", () => {
        expect(() => new Address(EMPTY_ID)).toThrowError(
            /^EmptyAtributeError.*/
        );
    });
});
