import { Logger } from '../../Logger';
import { Writeable } from '../Domain/Writeable';
const csvWriter = require('csv-write-stream');
const fs = require('fs');

class CsvWriter implements Writeable {
  protected readonly logger: Logger;

  constructor(logger: Logger) {
    this.logger = logger;
  }

  write(path: string, data: object, callback?: Function): void {
    const writer = csvWriter({ sendHeaders: false });
    try {
      writer.pipe(fs.createWriteStream(path, { flags: 'a' }));
      writer.write(data);
    } catch (writingError) {
      this.logger.error(writingError);
    } finally {
      writer.end();
    }
  }
}

export { CsvWriter };
