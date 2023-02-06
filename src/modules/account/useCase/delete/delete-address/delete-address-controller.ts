import { Request, Response } from 'express';
import { deleteAddressUseCase } from '.';

export class DeleteAddressController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    await deleteAddressUseCase.execute(id);

    return response.status(200).send();
  }
}
