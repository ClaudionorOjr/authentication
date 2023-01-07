import { Request, Response } from 'express';
import { CreateUserUseCase } from './create-user-use-case';

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, surname, email, password, phone } = request.body;

    await this.createUserUseCase.execute({
      name,
      surname,
      email,
      password,
      phone,
    });

    return response.status(201).send();
  }
}
