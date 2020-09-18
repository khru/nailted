import { FsUserRepository } from '../../../Users/Infrastructure/FsUserRepository';
import { ConsoleLogger } from '../../../Users/Infrastructure/ConsoleLogger';
import { CsvReader } from '../../../Users/Infrastructure/CsvReader';
import { UsersRepository } from '../../../Users/Domain/UsersRepository';
import { User } from '../../../Users/Domain/User';
import { CsvWriter } from '../../../Users/Infrastructure/CsvWriter';
import { UserToCsv } from '../../../Users/Domain/UserToCsv';

describe('It should validate the Address attribute', () => {
  let repository: UsersRepository;
  beforeAll(() => {
    const logger = new ConsoleLogger();
    repository = new FsUserRepository(
      new CsvReader(logger),
      new CsvWriter(logger),
      new UserToCsv(),
      logger,
    );
  });

  it('should getAll data from the repository', async () => {
    const users: Array<User> = await repository.getAll();
    expect(users.length >= 0).toBe(true);
  });
});
