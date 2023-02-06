import { Address } from '../entitties/address';

export abstract class AddressRepository {
  abstract create(address: Address): Promise<void>;

  abstract findById(id: string): Promise<Address | null>;

  abstract update(address: Address): Promise<void>;

  abstract delete(id: string): Promise<void>;
}
