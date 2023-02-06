import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { UnauthorizedError } from '../../../errors/app-error';

interface IPayload {
  sub: string;
}

export function ensureAuthenticateUser(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new UnauthorizedError('Token missing!');
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub } = verify(token, process.env.USER_SECRET!) as IPayload;

    request.id_user = sub;

    return next();
  } catch {
    throw new UnauthorizedError('Token invalid!');
  }
}
