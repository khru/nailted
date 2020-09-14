import * as usersRoutes from './Users/Infrastructure/routes';

const Routes = [usersRoutes.Routes].reduce(
  // @ts-ignore
  (acc, val) => acc.concat(val),
  [],
);
export { Routes };
