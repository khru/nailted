import { UsersRepository } from '../Domain/UsersRepository';
import { User } from '../Domain/User';
import { ValidUserData } from '../Domain/ValidUserData';
import { Logger } from '../../Logger';
import { Readable } from '../../Readable';
import { Writeable } from '../Domain/Writeable';
import {ToCSV} from "../Domain/ToCSV";

export class FsUserRepository implements UsersRepository {
  protected readonly logger;
  protected readonly reader;
  protected readonly writer;
  private readonly path: string = `${__dirname}/employees.txt`;
  protected readonly csvConverter: ToCSV;

  constructor(reader: Readable, writer: Writeable, csvConverter: ToCSV, logger: Logger) {
    this.logger = logger;
    this.reader = reader;
    this.writer = writer;
    this.csvConverter = csvConverter;
  }

  async getAll(): Promise<Array<User>> {
    const usersFromFile: Array<ValidUserData> = await this.reader.read(this.path);
    return new Promise<Array<User>>((resolve, reject) =>
      resolve(usersFromFile.map(user => new User(user))),
    );
  }

  create(user: object): void {
    const validUser = user as ValidUserData;
    const userOnCsvFormat = this.csvConverter.toCSV(new User(validUser));
    this.writer.write(this.path, userOnCsvFormat);
  }
}
