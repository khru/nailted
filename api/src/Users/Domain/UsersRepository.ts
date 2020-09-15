import { User } from './User';

interface UsersRepository {
  getAll(): Promise<Array<User>>;
  create(user: User): void;
}

export { UsersRepository };
