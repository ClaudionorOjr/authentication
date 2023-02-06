import { Request, Response } from 'express';
import { createAddressUseCase } from '.';

export class CreateAddressController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { city, street, streetNumber } = request.body;
    const { id_user } = request;

    await createAddressUseCase.execute({
      city,
      street,
      streetNumber,
      userId: id_user,
    });

    return response.status(201).json();
  }
}
