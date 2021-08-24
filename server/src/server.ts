import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { router } from './routes';

import './database/index.ts';
import { AppError } from './errors/AppError';

const app = express();
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:3000'],
  methods: ['GET', 'POST'],
  credentials: true,
}));

app.use(router);

app.use(
  (err: Error, req: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        error: err.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
    });
  },
);
app.listen(3333, () => {
  console.log('Servidor rodando na porta 3333');
});
