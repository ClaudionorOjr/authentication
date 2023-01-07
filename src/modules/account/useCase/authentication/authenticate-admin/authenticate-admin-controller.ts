import { Request, Response } from 'express';
import { AuthenticateAdminUseCase } from './authenticate-admin-use-case';

export class AuthenticateAdminController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateAdminUseCase = new AuthenticateAdminUseCase();

    const token = await authenticateAdminUseCase.execute({ email, password });

    return response.status(200).json(token);
  }
}
