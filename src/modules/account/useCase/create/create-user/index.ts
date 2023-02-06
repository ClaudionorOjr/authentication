import { PrismaUsersRepository } from '../../../../../infra/database/prisma/repositories/prisma-users-repository';

import { CreateUserController } from './create-user-controller';
import { CreateUserUseCase } from './create-user-use-case';

// const usersRepository = new InMemoryUsersRepository();
const usersRepository = new PrismaUsersRepository();

const createUserUseCase = new CreateUserUseCase(usersRepository);

// const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase };
