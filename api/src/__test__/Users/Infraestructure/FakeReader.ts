import { Readable } from '../../../Users/Domain/Readable';

export class FakeReader implements Readable {
  read(path: string): any {
    return [];
  }
}
