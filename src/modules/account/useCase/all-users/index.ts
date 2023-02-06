import { PrismaUsersRepository } from '../../../../infra/database/prisma/repositories/prisma-users-repository';
import { AllUsersUseCase } from './all-users-use-case';

// const usersRepository = new InMemoryUsersRepository();
const usersRepository = new PrismaUsersRepository();

const allUsersUseCase = new AllUsersUseCase(usersRepository);

export { allUsersUseCase };
