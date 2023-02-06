import { PrismaAddressRepository } from '../../../../../infra/database/prisma/repositories/prisma-address-repository';
import { PrismaUsersRepository } from '../../../../../infra/database/prisma/repositories/prisma-users-repository';
import { CreateAddressUseCase } from './create-address-use-case';

const addressRepository = new PrismaAddressRepository();

const createAddressUseCase = new CreateAddressUseCase(addressRepository);

export { createAddressUseCase };
