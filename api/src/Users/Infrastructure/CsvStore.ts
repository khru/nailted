import { Logger } from '../../Logger';
import { Store } from '../Domain/Store';

class CsvStore implements Store {
  protected readonly logger: Logger;

  constructor(logger: Logger) {
    this.logger = logger;
  }

  store(path: string, data: object, callback?: Function): void {
    //const replacer = (key, value) => value === null ? '' : value;
  }
}

export { CsvStore };
