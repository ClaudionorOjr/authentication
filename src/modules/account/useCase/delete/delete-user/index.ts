import { PrismaUsersRepository } from '../../../../../infra/database/prisma/repositories/prisma-users-repository';
import { DeleteUserUseCase } from './delete-user-use-case';

const usersRepository = new PrismaUsersRepository();

const deleteUserUseCase = new DeleteUserUseCase(usersRepository);

export { deleteUserUseCase };
