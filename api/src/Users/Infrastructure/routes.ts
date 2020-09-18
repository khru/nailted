import { UserController } from './UserController';

export const Routes = [
  {
    method: 'get',
    route: '/users',
    controller: UserController,
    action: 'index',
  },
  {
    method: 'post',
    route: '/user/',
    controller: UserController,
    action: 'create',
  },
];
