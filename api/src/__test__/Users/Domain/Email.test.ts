import { Email } from '../../../Users/Domain/Email';

const VALID_NAME = 'evrtrabajo@pep.com';
const INVALID_NAME = 'evrtrabajopep.com';
const EMPTY_NAME = '';

describe('It should validate the email attribute', () => {
  it('should create a valid name', () => {
    expect(new Email(VALID_NAME).email).toBe(VALID_NAME);
  });
  it('should fail on creating an email with an empty string', () => {
    expect(() => new Email(EMPTY_NAME)).toThrowError(/^EmptyAtributeError.*/);
  });
  it('should fail on creating an email with an invalid email', () => {
    expect(() => new Email(INVALID_NAME)).toThrowError(/^InvalidEmailError.*/);
  });
});
