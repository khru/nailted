import { UsersRepository } from '../Domain/UsersRepository';
import { User } from '../Domain/User';
import { ValidUserData } from '../Domain/ValidUserData';
import { Logger } from '../../Logger';
import { Readable } from '../../Readable';

export class FsUserRepository implements UsersRepository {
  protected readonly logger;
  protected readonly reader;
  private readonly path: string = `${__dirname}/employees.txt`;

  constructor(reader: Readable, logger: Logger) {
    this.logger = logger;
    this.reader = reader;
  }

  async getAll(): Promise<Array<User>> {
    const usersFromFile: Array<ValidUserData> = await this.reader.read(this.path);
    return new Promise<Array<User>>((resolve, reject) =>
      resolve(usersFromFile.map(user => new User(user))),
    );
  }

  create(user: User): void {}
}
