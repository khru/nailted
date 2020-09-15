import { Readable } from '../../Readable';
import { Logger } from '../../Logger';
const CSVToJSON = require('csvtojson');

class CsvReader implements Readable {
  protected readonly logger: Logger;

  constructor(logger: Logger) {
    this.logger = logger;
  }

  async read(path: string): Promise<any> {
    return await new Promise((resolve, reject) =>
      CSVToJSON()
        .fromFile(path)
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          this.logger.error(error);
          reject(error);
        }),
    );
  }
}

export { CsvReader };
