import { User } from './User';

interface UsersRepository {
  getAll(): Promise<Array<User>>;
  create(user: object): void;
}

export { UsersRepository };
