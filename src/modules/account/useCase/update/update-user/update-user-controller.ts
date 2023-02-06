import { Request, Response } from 'express';
import { updateUserUseCase } from '.';

export class UpdateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id_user: id } = request;
    const { name, surname, phone } = request.body;

    await updateUserUseCase.execute({ id, name, surname, phone });

    return response.status(200).send();
  }
}
