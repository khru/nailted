import { EmptyAttributeError } from './EmptyAttributeError';

export abstract class StringAttribute {
  throwErrorIfEmptyAttribute(data: string, errorMessage: string): void {
    if (data.trim().length === 0) {
      throw new EmptyAttributeError(errorMessage);
    }
  }
}
