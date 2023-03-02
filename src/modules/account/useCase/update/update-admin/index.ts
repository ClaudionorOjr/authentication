import { PrismaAdminRepository } from '../../../../../infra/database/prisma/repositories/prisma-admin-repository';
import { UpdateAdminUseCase } from './update-admin-use-case';

const adminRepository = new PrismaAdminRepository();

const updateAdminUseCase = new UpdateAdminUseCase(adminRepository);

export { updateAdminUseCase };
