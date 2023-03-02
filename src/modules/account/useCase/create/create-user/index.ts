import { PrismaUsersRepository } from '../../../../../infra/database/prisma/repositories/prisma-users-repository';

import { CreateUserUseCase } from './create-user-use-case';

// const usersRepository = new InMemoryUsersRepository();
const usersRepository = new PrismaUsersRepository();

const createUserUseCase = new CreateUserUseCase(usersRepository);

export { createUserUseCase };
