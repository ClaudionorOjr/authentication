import { Request, Response } from 'express';
import { authenticateAdminUseCase } from '.';

export class AuthenticateAdminController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const token = await authenticateAdminUseCase.execute({ email, password });

    return response.status(200).json(token);
  }
}
