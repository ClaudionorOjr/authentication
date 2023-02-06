import { Address } from '../../../entitties/address';
import { AddressRepository } from '../../../repositories/address-repository';

interface CreateAddressRequest {
  city: string;
  street: string;
  streetNumber: number;
  userId: string;
}

export class CreateAddressUseCase {
  constructor(private addressRepository: AddressRepository) {}

  async execute({
    city,
    street,
    streetNumber,
    userId,
  }: CreateAddressRequest): Promise<void> {
    const address = new Address({
      city,
      street,
      streetNumber,
      userId,
    });

    console.log(address);
    await this.addressRepository.create(address);
  }
}
