import { PrismaAdminRepository } from '../../../../../infra/database/prisma/repositories/prisma-admin-repository';
import { AuthenticateAdminUseCase } from './authenticate-admin-use-case';

const adminRepository = new PrismaAdminRepository();
const authenticateAdminUseCase = new AuthenticateAdminUseCase(adminRepository);

export { authenticateAdminUseCase };
