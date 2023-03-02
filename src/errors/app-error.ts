export class HttpError extends Error {
  public readonly statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export class BadRequestError extends HttpError {
  constructor(message?: string) {
    super(message || 'Bad Request', 400);
  }
}

export class UnauthorizedError extends HttpError {
  constructor(message?: string) {
    super(message || 'Unauthorized', 401);
  }
}

export class NotFoundError extends HttpError {
  constructor(message?: string) {
    super(message || 'Not Found', 404);
  }
}
