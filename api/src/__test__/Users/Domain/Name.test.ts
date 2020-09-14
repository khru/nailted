import { Name } from '../../../Users/Domain/Name';

const VALID_NAME = 'Emmanuel';
const EMPTY_NAME = '';

describe('It should validate the name attribute', () => {
  it('should create a valid name', () => {
    expect(new Name(VALID_NAME).name).toBe(VALID_NAME);
  });
  it('should fail on creating a name', () => {
    expect(() => new Name(EMPTY_NAME)).toThrowError(/^EmptyAtributeError.*/);
  });
});
