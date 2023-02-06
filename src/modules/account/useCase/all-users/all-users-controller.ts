import { Request, Response } from 'express';
import { allUsersUseCase } from '.';

export class AllUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const allUser = await allUsersUseCase.execute();

    return response.json(allUser);
  }
}
