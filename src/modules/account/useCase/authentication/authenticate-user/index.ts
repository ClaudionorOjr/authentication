import { InMemoryUsersRepository } from '../../../repositories/in-memory/in-memory-users-repository';
import { AuthenticateUserController } from './authenticate-user-controller';
import { AuthenticateUserUseCase } from './authenticate-user-use-case';

const usersRepository = new InMemoryUsersRepository();

const authenticateUserUseCase = new AuthenticateUserUseCase(usersRepository);
const authenticateUserController = new AuthenticateUserController(
  authenticateUserUseCase,
);

export { authenticateUserController };
