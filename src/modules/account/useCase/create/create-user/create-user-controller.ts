import { Request, Response } from 'express';
import { createUserUseCase } from '.';

export class CreateUserController {
  // constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, surname, email, password, phone } = request.body;

    await createUserUseCase.execute({
      name,
      surname,
      email,
      password,
      phone,
    });

    return response.status(201).send();
  }
}
