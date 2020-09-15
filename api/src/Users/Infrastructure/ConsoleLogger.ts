import { Logger } from '../../Logger';

class ConsoleLogger implements Logger {
  private readonly console: any;

  constructor() {
    this.console = console;
  }

  log(message: string): any {
    this.console.log(message);
  }

  error(message: string): any {
    this.console.error(message);
  }

  warn(message: string): any {
    this.console.warn(message);
  }
}

export { ConsoleLogger };
