import { Name } from "@/components/Users/Name";

const VALID_NAME = "Emmanuel";
const EMPTY_NAME = "";

describe("It should validate the name attribute", () => {
    it("should create a valid name", () => {
        expect(new Name(VALID_NAME).value).toBe(VALID_NAME);
    });
    it("should fail on creating a name", () => {
        expect(() => new Name(EMPTY_NAME)).toThrowError(
            /^EmptyAtributeError.*/
        );
    });
});
