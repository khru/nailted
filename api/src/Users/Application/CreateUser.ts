import { InputService } from '../../InputService';
import { UsersRepository } from '../Domain/UsersRepository';
import { Logger } from '../../Logger';

export class CreateUser implements InputService {
  protected readonly logger: Logger;
  protected readonly repo: UsersRepository;

  constructor(repo: UsersRepository, logger: Logger) {
    this.logger = logger;
    this.repo = repo;
  }

  //@ts-ignore
  async execute(data: object): any {
    try {
      this.repo.create(data);
      return { status: 'success' };
    } catch (err) {
      this.logger.error(err);
      throw err;
    }
  }
}
