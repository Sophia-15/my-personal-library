import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { AppError } from '../errors/AppError';

interface IPayload {
  sub: string
}

export function ensureAuthentication(req: Request, res: Response, next: NextFunction) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    throw new AppError('Unauthorized', 401);
  }

  const [, token] = authToken.split(' ');

  try {
    const { sub } = verify(token, process.env.SECRET) as IPayload;

    req.user_id = sub;

    return next();
  } catch (error) {
    throw new AppError('Unauthorized', 401);
  }
}
