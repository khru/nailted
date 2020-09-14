import { User } from './User';

interface UsersRepository {
  getAll(): Array<User>;
  create(user: User): void;
}

export { UsersRepository };
