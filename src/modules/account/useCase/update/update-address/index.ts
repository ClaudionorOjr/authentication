import { PrismaAddressRepository } from '../../../../../infra/database/prisma/repositories/prisma-address-repository';
import { UpdateAddressUseCase } from './update-address-use-case';

const addressRepository = new PrismaAddressRepository();

const updateAddressUseCase = new UpdateAddressUseCase(addressRepository);

export { updateAddressUseCase };
