import { Phone } from "@/components/Users/Phone";

const VALID_PHONE = "816-761-4637";
const INVALID_NUMBERS = [
    "016-761-4637",
    "216-61-44637",
    "16-361-44637",
    "16-2361-4637",
    "644214586",
    "+34655897302"
];
const EMPTY_NAME = "";

describe("It should validate the phone attribute", () => {
    it("should create a valid name", () => {
        expect(new Phone(VALID_PHONE).value).toBe(VALID_PHONE);
    });

    it("should fail on creating an phone with an empty string", () => {
        expect(() => new Phone(EMPTY_NAME)).toThrowError(
            /^EmptyAtributeError.*/
        );
    });

    it("should fail on creating an Phone with an invalid phone number", () => {
        INVALID_NUMBERS.forEach(number =>
            expect(() => new Phone(number)).toThrowError(/^InvalidPhoneError.*/)
        );
    });
});
