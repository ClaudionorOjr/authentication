import { PrismaUsersRepository } from '../../../../../infra/database/prisma/repositories/prisma-users-repository';
import { UpdateUserUseCase } from './update-user-use-case';

const usersRepository = new PrismaUsersRepository();

const updateUserUseCase = new UpdateUserUseCase(usersRepository);

export { updateUserUseCase };
