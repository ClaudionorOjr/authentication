import { Address } from '../../../../modules/account/entitties/address';
import { Address as RawAddress } from '@prisma/client';

export class PrismaAddressMapper {
  static toPrisma(address: Address) {
    return {
      id: address.id,
      city: address.city,
      street: address.street,
      streetNumber: address.streetNumber,
      userId: address.userId,
    };
  }

  static toDomain(address: RawAddress) {
    return new Address(
      {
        city: address.city,
        street: address.street,
        streetNumber: address.streetNumber,
        userId: address.userId,
      },
      address.id,
    );
  }
}
