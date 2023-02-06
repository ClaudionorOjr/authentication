import {
  BadRequestError,
  UnauthorizedError,
} from '../../../../../errors/app-error';
import { AddressRepository } from '../../../repositories/address-repository';

interface UpadateAddressRequest {
  id_address: string;
  id_user: string;
  city?: string;
  street?: string;
  streetNumber?: string;
}

export class UpdateAddressUseCase {
  constructor(private addressRepository: AddressRepository) {}

  async execute({
    id_address,
    id_user,
    city,
    street,
    streetNumber,
  }: UpadateAddressRequest) {
    const address = await this.addressRepository.findById(id_address);

    if (!address) {
      throw new BadRequestError('Address does not exists!');
    }

    if (address.userId !== id_user) {
      throw new UnauthorizedError('Unauthorized!');
    }

    Object.assign(address, {
      city: city ? city : address.city,
      street: street ? street : address.street,
      streetNumber: streetNumber ? streetNumber : address.streetNumber,
    });

    await this.addressRepository.update(address);
  }
}
