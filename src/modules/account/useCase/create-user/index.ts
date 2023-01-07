import { InMemoryUsersRepository } from '../../repositories/in-memory/in-memory-users-repository';
import { CreateUserController } from './create-user-controller';
import { CreateUserUseCase } from './create-user-use-case';

const usersRepository = new InMemoryUsersRepository();

const createUserUseCase = new CreateUserUseCase(usersRepository);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
