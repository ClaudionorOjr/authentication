import {
  NotFoundError,
  UnauthorizedError,
} from '../../../../../errors/app-error';
import { AddressRepository } from '../../../repositories/address-repository';

interface DeleteAddressRequest {
  id_address: string;
  id_user: string;
}

export class DeleteAddressUseCase {
  constructor(private addressRepository: AddressRepository) {}

  async execute({ id_address, id_user }: DeleteAddressRequest) {
    const address = await this.addressRepository.findById(id_address);

    if (!address) {
      throw new NotFoundError('Address does not exists!');
    }

    if (address.userId !== id_user) {
      throw new UnauthorizedError('Unauthorized');
    }

    await this.addressRepository.delete(id_address);
  }
}
