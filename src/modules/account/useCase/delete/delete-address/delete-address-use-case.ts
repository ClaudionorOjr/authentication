import { NotFoundError } from '../../../../../errors/app-error';
import { AddressRepository } from '../../../repositories/address-repository';

export class DeleteAddressUseCase {
  constructor(private addressRepository: AddressRepository) {}

  async execute(id: string) {
    const address = await this.addressRepository.findById(id);

    console.log(address);
    if (!address) {
      throw new NotFoundError('Address does not exists!');
    }

    await this.addressRepository.delete(id);
  }
}
