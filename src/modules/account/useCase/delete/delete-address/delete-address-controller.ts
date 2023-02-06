import { Request, Response } from 'express';
import { deleteAddressUseCase } from '.';

export class DeleteAddressController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { id_user } = request;

    await deleteAddressUseCase.execute({ id_address: id, id_user });

    return response.status(200).send();
  }
}
