import { Email } from '../../../Users/Domain/Email';

const VALID_EMAILS = ['evrtrabajo@pep.com', 'evrtrabajo@pep', 'e@pep'];
const INVALID_EMAILS = ['evrtrabajopep.com', 'e @pep', 'evrtrabajo@pep.'];
const EMPTY_NAME = '';

describe('It should validate the email attribute', () => {
  it('should create a valid name', () => {
    VALID_EMAILS.forEach(mail => {
      expect(new Email(mail).value).toBe(mail);
    });

  });
  it('should fail on creating an email with an empty string', () => {
    expect(() => new Email(EMPTY_NAME)).toThrowError(/^EmptyAtributeError.*/);
  });

  it('should fail on creating an email with an invalid email', () => {
    INVALID_EMAILS.forEach(mail => {
      expect(() => new Email(mail)).toThrowError(/^InvalidEmailError.*/);
    });
  });
});
