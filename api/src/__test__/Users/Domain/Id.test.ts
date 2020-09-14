import { Id } from '../../../Users/Domain/Id';

const VALID_ID = '111';
const EMPTY_ID = '';

describe('It should validate the name attribute', () => {
  it('should create a valid name', () => {
    expect(new Id(VALID_ID).id).toBe(VALID_ID);
  });
  it('should fail on creating a name', () => {
    expect(() => new Id(EMPTY_ID)).toThrowError(/^EmptyAtributeError.*/);
  });
});
