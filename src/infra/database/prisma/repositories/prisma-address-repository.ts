import { Address } from '../../../../modules/account/entitties/address';
import { AddressRepository } from '../../../../modules/account/repositories/address-repository';
import { PrismaAddressMapper } from '../mappers/prisma-address-mapper';
import { prisma } from '../prisma-client';

export class PrismaAddressRepository implements AddressRepository {
  async create(address: Address): Promise<void> {
    const raw = PrismaAddressMapper.toPrisma(address);
    console.log(raw);

    await prisma.address.create({
      data: raw,
    });
  }

  async findById(id: string): Promise<Address | null> {
    const address = await prisma.address.findFirst({
      where: {
        id: {
          equals: id,
        },
      },
    });

    if (!address) {
      return null;
    }

    return PrismaAddressMapper.toDomain(address);
  }

  async update(address: Address): Promise<void> {
    const rawAddress = PrismaAddressMapper.toPrisma(address);

    await prisma.address.update({
      where: {
        id: address.id,
      },
      data: rawAddress,
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.address.delete({
      where: {
        id,
      },
    });
  }
}
