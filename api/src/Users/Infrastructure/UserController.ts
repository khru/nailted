import { NextFunction, Request, Response } from 'express';

export class UserController {
  // Constructor with the repository

  async all(request: Request, response: Response, next: NextFunction) {
      response.status(200).json({ hello: 'world' });
  }

  async one(request: Request, response: Response, next: NextFunction) {}

  async save(request: Request, response: Response, next: NextFunction) {}
}
