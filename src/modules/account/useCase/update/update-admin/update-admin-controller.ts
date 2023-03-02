import { Request, Response } from 'express';
import { updateAdminUseCase } from '.';

export class UpdateAdminController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id_admin: id } = request;
    const { name, surname } = request.body;

    await updateAdminUseCase.execute({ id, name, surname });

    return response.status(200).send();
  }
}
