import { NextFunction, Request, Response } from 'express';
import { GetAllUsers } from '../Application/GetAllUsers';
import { FsUserRepository } from './FsUserRepository';
import { Logger } from '../../Logger';
import { ConsoleLogger } from './ConsoleLogger';
import { UsersRepository } from '../Domain/UsersRepository';
import { CsvReader } from './CsvReader';
import { CsvWriter } from './CsvWriter';
import { CreateUser } from '../Application/CreateUser';
import { UserToCsv } from '../Domain/UserToCsv';

export class UserController {
  protected readonly logger: Logger;
  protected readonly repository: UsersRepository;

  //TODO: The framework doesn't have any DI
  constructor() {
    this.logger = new ConsoleLogger();
    this.repository = new FsUserRepository(
      new CsvReader(this.logger),
      new CsvWriter(this.logger),
      new UserToCsv(),
      this.logger,
    );
  }

  async index(request: Request, response: Response, next: NextFunction) {
    try {
      response.status(200).json(await new GetAllUsers(this.repository, this.logger).execute());
      next();
    } catch (error) {
      this.logger.error(error);
      response.status(500).json({ error: { status: 500, msg: 'Something went wrong' } });
    }
  }

  async create(request: Request, response: Response, next: NextFunction) {
    try {
      response
        .status(200)
        .json(await new CreateUser(this.repository, this.logger).execute(request.body));
      next();
    } catch (error) {
      this.logger.error(error);
      response.status(500).json({ error: { status: 500, msg: 'Something went wrong' } });
    }
  }
}
