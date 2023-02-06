import { Request, Response } from 'express';
import { authenticateUserUseCase } from '.';

export class AuthenticateUserController {
  // constructor(private authenticateUserUseCase: AuthenticateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const token = await authenticateUserUseCase.execute({
      email,
      password,
    });

    return response.status(200).json(token);
  }
}
