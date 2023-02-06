import { UsersRepository } from '../../repositories/users-repository';

export class AllUsersUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute() {
    const users = await this.usersRepository.allUsers();

    return users;
  }
}
