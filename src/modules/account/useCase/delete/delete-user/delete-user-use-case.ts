import { NotFoundError } from '../../../../../errors/app-error';
import { UsersRepository } from '../../../repositories/users-repository';

export class DeleteUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute(id: string) {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new NotFoundError('User does not exists!');
    }

    await this.usersRepository.delete(user.id);
  }
}
