import { NextFunction, Request, Response } from 'express';
import { AppError } from '../../../errors/app-error';

export function errorTreatment(
  err: Error & Partial<AppError>,
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const statusCode = err.statusCode ?? 500;
  const message = err.statusCode
    ? err.message
    : `Internal Server Error - ${err.message}`;

  return response.status(statusCode).json({
    message,
  });
}
