import 'reflect-metadata';
import express = require('express');
import * as bodyParser from 'body-parser';
import { Request, Response } from 'express';
import { Routes } from './routes';
const cors = require('cors');
import dotenv from 'dotenv';
dotenv.config();
import { Route } from './Route';

const PORT = process.env.BACK_NODE_PORT || 3000;

//@ts-ignore
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// register express routes from defined application routes
Routes.forEach(route => {
  const validRoute = new Route(route);
  (app as any)[route.method](
    route.route,
    ...validRoute.middleware,
    (req: Request, res: Response, next: Function) => {
      const result = new (validRoute.controller as any)()[validRoute.action](req, res, next);
      if (result instanceof Promise) {
        result.then(result => {
          return result !== null && result !== undefined ? res.send(result) : undefined;
        });
      } else if (result !== null && result !== undefined) {
        res.json(result);
      }
    },
  );
});

// start express server
app.listen(PORT);

// eslint-disable-next-line no-console
console.log(
  `Express server has started on port ${PORT}. Open http://localhost:${PORT}/ to see results`,
);
