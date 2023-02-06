import { Request, Response } from 'express';
import { updateAddressUseCase } from '.';

export class UpdateAddressController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id_user } = request;
    const { id } = request.params;
    const { city, street, streetNumber } = request.body;

    await updateAddressUseCase.execute({
      id_address: id,
      id_user,
      city,
      street,
      streetNumber,
    });

    return response.status(200).send();
  }
}
