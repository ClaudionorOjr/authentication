import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { UnauthorizedError } from '../../../errors/app-error';

export function ensureAuthenticateAdmin(
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
    verify(token, process.env.ADMIN_SECRET!);

    return next();
  } catch (error) {
    throw new UnauthorizedError('Token invalid!');
  }
}
