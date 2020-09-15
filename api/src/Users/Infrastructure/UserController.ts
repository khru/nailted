import { NextFunction, Request, Response } from 'express';
import { GetAllUsers } from '../Application/GetAllUsers';
import { FsUserRepository } from './FsUserRepository';
import { Logger } from '../../Logger';
import { ConsoleLogger } from './ConsoleLogger';
import { UsersRepository } from '../Domain/UsersRepository';
import { CsvReader } from './CsvReader';

export class UserController {
  protected readonly logger: Logger;
  protected readonly repository: UsersRepository;

  // The framework doesn't have any DI
  constructor() {
    this.logger = new ConsoleLogger();
    this.repository = new FsUserRepository(new CsvReader(this.logger), this.logger);
  }

  async all(request: Request, response: Response, next: NextFunction) {
    try {
      response.status(200).json(await new GetAllUsers(this.repository, this.logger).execute());
    } catch (error) {
      response.status(500).json({ error: { status: 500, msg: 'Something went wrong' } });
    }
  }

  async one(request: Request, response: Response, next: NextFunction) {}

  async save(request: Request, response: Response, next: NextFunction) {}
}
