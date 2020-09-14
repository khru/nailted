import { Route } from '../Route';
import { EmptyController } from '../EmptyController';

const REQUIRED_VALID_ROUTE = {
  method: 'get',
  route: '/oauth/google/logout',
  controller: EmptyController,
  action: 'logout',
};

const VALID_ROUTE_WITH_MIDDLEWARE = {
  method: 'get',
  route: '/oauth/google/logout',
  middleware: [() => 'working'],
  controller: EmptyController,
  action: 'logout',
};

const INVALID_ROUTE_NO_METHOD = {
  route: '/oauth/google/logout',
  controller: EmptyController,
  action: 'logout',
};

const INVALID_ROUTE_NO_ROUTE = {
  method: 'get',
  controller: EmptyController,
  action: 'logout',
};

const INVALID_ROUTE_NO_CONTROLLER = {
  method: 'get',
  route: '/oauth/google/logout',
  action: 'logout',
};

const INVALID_ROUTE_NO_ACTION = {
  method: 'get',
  route: '/oauth/google/logout',
  controller: EmptyController,
};

const INVALID_ROUTE_ONLY_MIDDLEWARE = {
  middleware: [() => 'working'],
};

/* eslint-disable no-undef */
describe('Test for route', () => {
  it('should fail to create a route without method', () => {
    expect(() => new Route(INVALID_ROUTE_NO_METHOD)).toThrowError(/^InvalidRoute.*/);
  });

  it('should fail to create a route without route', () => {
    expect(() => new Route(INVALID_ROUTE_NO_ROUTE)).toThrowError(/^InvalidRoute.*/);
  });

  it('should fail to create a route without controller', () => {
    expect(() => new Route(INVALID_ROUTE_NO_CONTROLLER)).toThrowError(/^InvalidRoute.*/);
  });

  it('should fail to create a route without action', () => {
    expect(() => new Route(INVALID_ROUTE_ONLY_MIDDLEWARE)).toThrowError(/^InvalidRoute.*/);
  });

  it('should fail to create a route with only a middleware', () => {
    expect(() => new Route(INVALID_ROUTE_NO_ACTION)).toThrowError(/^InvalidRoute.*/);
  });

  it('should create a route with the require data', () => {
    expect(new Route(REQUIRED_VALID_ROUTE)).toBeInstanceOf(Route);
  });

  it('should create a route with the require data and middleware', () => {
    expect(new Route(VALID_ROUTE_WITH_MIDDLEWARE)).toBeInstanceOf(Route);
  });
  // it('should create a DateTime with valid data', () => {
  //     expect(new DateTime(VALID_DATE)).toBeInstanceOf(DateTime);
  // });
  //
  // it('should create a DateTime with null data (FROM DB)', () => {
  //     expect(new DateTime()).toBeInstanceOf(DateTime);
  // });
  //
  // it('should create a DateTime with fixed valid data', () => {
  //     expect(new DateTime(FIXED_DATE).date).toBe(FIXED_DATE);
  // });
  //
  // it('should return a DateTime string with fixed valid data', () => {
  //     expect(new DateTime(FIXED_DATE).toString()).toBe(FIXED_DATE_STRING);
  // });
  //
  // it('should create a DateTime with undefined', () => {
  //     expect(new DateTime(UNKNOWN_DATE)).toBeInstanceOf(DateTime);
  // });
  //
  // it('should return an empty string on an undefined DateTime', () => {
  //     expect(new DateTime(UNKNOWN_DATE).toString()).toBe(EMPTY_STRING_DATE);
  // });
  //
  // it('should return true when two DateTimes are equal (undefined)', () => {
  //     expect(new DateTime(UNKNOWN_DATE).isEqual(new DateTime(UNKNOWN_DATE))).toBe(true);
  // });
  //
  // it('should return true when two DateTimes are equal (VALID_DATE)', () => {
  //     expect(new DateTime(VALID_DATE).isEqual(new DateTime(VALID_DATE))).toBe(true);
  // });
  //
  // it('should return false when two DateTimes are different', () => {
  //     expect(new DateTime(VALID_DATE).isEqual(new DateTime(UNKNOWN_DATE))).not.toBe(true);
  // });
  //
  // it('should fail to create dates from the future', () => {
  //     expect(() => new DateTime(TOMORROW_INVALID_DATE)).toThrowError(/^InvalidFutureDate.*/);
  // });
});
