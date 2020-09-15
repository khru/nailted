import { Service } from '../../Service';
import { UsersRepository } from '../Domain/UsersRepository';
import { Logger } from '../../Logger';

export class GetAllUsers implements Service {
  protected readonly logger: Logger;
  protected readonly repo: UsersRepository;

  constructor(repo: UsersRepository, logger: Logger) {
    this.logger = logger;
    this.repo = repo;
  }

  //@ts-ignore
  async execute(): any {
    const users = await this.repo.getAll();
    return users.map(user => user.toJSON());
  }
}
