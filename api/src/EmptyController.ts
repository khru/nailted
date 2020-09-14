import { NextFunction, Request, Response } from 'express';

export class EmptyController {
  async empty(request: Request, response: Response, next: NextFunction) {
    next();
  }
}
