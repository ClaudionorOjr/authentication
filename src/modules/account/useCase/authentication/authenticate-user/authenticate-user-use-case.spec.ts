import { describe, expect, it } from 'vitest';
import { InMemoryUsersRepository } from '../../../repositories/in-memory/in-memory-users-repository';
import { CreateUserUseCase } from '../../create-user/create-user-use-case';
import { AuthenticateUserUseCase } from './authenticate-user-use-case';

describe('Authenticate user', () => {
  it('should be able to authenticate user', async () => {
    const usersRepository = new InMemoryUsersRepository();
    const authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRepository,
    );
    const createUserUseCase = new CreateUserUseCase(usersRepository);

    await createUserUseCase.execute({
      name: 'John',
      surname: 'Doe',
      email: 'johndoe@email.com',
      password: '123456',
      phone: '80999999999',
    });

    const { token } = await authenticateUserUseCase.execute({
      email: 'johndoe@email.com',
      password: '123456',
    });

    expect(token).toBeTruthy();
  });
});
