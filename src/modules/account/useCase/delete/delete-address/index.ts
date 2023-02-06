import { PrismaAddressRepository } from '../../../../../infra/database/prisma/repositories/prisma-address-repository';
import { DeleteAddressUseCase } from './delete-address-use-case';

const addressRepository = new PrismaAddressRepository();

const deleteAddressUseCase = new DeleteAddressUseCase(addressRepository);

export { deleteAddressUseCase };
