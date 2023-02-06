import { Request, Response } from 'express';
import { deleteUserUseCase } from '.';

export class DeleteUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id_user } = request;

    await deleteUserUseCase.execute(id_user);

    return response.status(200).send();
  }
}
