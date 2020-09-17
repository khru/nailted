import { Id } from "@/components/Users/Id";

const VALID_ID = "111";
const EMPTY_ID = "";

describe("It should validate the id attribute", () => {
    it("should create a valid id", () => {
        expect(new Id(VALID_ID).value).toBe(VALID_ID);
    });
    it("should fail on creating a id", () => {
        expect(() => new Id(EMPTY_ID)).toThrowError(/^EmptyAtributeError.*/);
    });
});
