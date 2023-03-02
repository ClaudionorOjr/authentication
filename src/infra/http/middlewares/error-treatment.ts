import { NextFunction, Request, Response } from 'express';
import { HttpError } from '../../../errors/app-error';

export function errorTreatment(
  err: Error & Partial<HttpError>,
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
