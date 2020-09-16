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
    route: '/user/:id',
    controller: UserController,
    action: 'create',
  },
];
