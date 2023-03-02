import { PrismaAdminRepository } from '../../../../../infra/database/prisma/repositories/prisma-admin-repository';
import { CreateAdminUseCase } from './create-admin-use-case';

const adminRepository = new PrismaAdminRepository();
const createAdminUseCase = new CreateAdminUseCase(adminRepository);

export { createAdminUseCase };
