import { PrismaUsersRepository } from '../../../../../infra/database/prisma/repositories/prisma-users-repository';
import { AuthenticateUserController } from './authenticate-user-controller';
import { AuthenticateUserUseCase } from './authenticate-user-use-case';

// const usersRepository = new InMemoryUsersRepository();
const usersRepository = new PrismaUsersRepository();

const authenticateUserUseCase = new AuthenticateUserUseCase(usersRepository);

// const authenticateUserController = new AuthenticateUserController(
//   authenticateUserUseCase,
// );

export { authenticateUserUseCase };
