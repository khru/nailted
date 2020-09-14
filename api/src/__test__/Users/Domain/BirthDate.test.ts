import { Birthdate } from '../../../Users/Domain/BirthDate';

const VALID_DATES = [
  '10/12/1985',
  '3/15/1951',
  '3/30/1990',
  '3/12/1940',
  '2/25/1953',
  '8/24/1987',
  '11/28/1963',
  '11/25/1955',
  '6/22/1977',
  '7/13/1964',
  '7/18/1935',
  '12/23/1993',
  '4/30/2000',
  '3/16/1945',
  '12/12/1950',
  '7/23/1995',
  '10/25/1991',
  '9/11/1970',
  '7/19/1935',
  '7/25/1939',
  '2/12/1959',
  '4/23/1994',
  '6/14/1939',
  '9/21/1959',
  '6/20/1951',
  '11/27/1952',
  '00/00/0000',
  '0/0/0000',
];

const INVALID_DATES = [
  '10-12/1985',
  '3/15-1951',
  '3-30-1990',
  '/12/1940',
  '2/1953',
  '1987',
  '1-5-1955',
  '1977/6/22/',
  '31/12/1964',
  '31/18/1935',
];
const EMPTY_NAME = '';

describe('It should validate the birth date attribute', () => {
  it('should create a valid birth date', () => {
    VALID_DATES.forEach(birthDate => {
      expect(new Birthdate(birthDate).birthDate).toBe(birthDate);
    });
  });

  it('should fail on creating a birth date', () => {
    expect(() => new Birthdate(EMPTY_NAME)).toThrowError(/^EmptyAtributeError.*/);
  });

  it('should fail on creating an birth date with an invalid birth date', () => {
    INVALID_DATES.forEach(birthDate => {
      expect(() => new Birthdate(birthDate)).toThrowError(/^InvalidBirthDateFormatError.*/);
    });
  });
});
