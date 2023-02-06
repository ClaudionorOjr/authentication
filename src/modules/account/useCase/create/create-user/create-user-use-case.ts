import { UsersRepository } from '../../../repositories/users-repository';
import { User } from '../../../entitties/user';
import { hash } from 'bcryptjs';
import { BadRequestError } from '../../../../../errors/app-error';

interface CreateUserRequest {
  name: string;
  surname: string;
  email: string;
  password: string;
  phone: string;
}

interface CreateUserResponse {
  user: User;
}

export class CreateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    name,
    surname,
    email,
    password,
    phone,
  }: CreateUserRequest): Promise<CreateUserResponse> {
    const userExists = await this.usersRepository.findByEmail(email);

    if (userExists) {
      throw new BadRequestError('User already exists!');
    }

    const passwordHash = await hash(password, 10);

    const user = new User({
      name,
      surname,
      email,
      password: passwordHash,
      phone,
    });

    await this.usersRepository.create(user);

    return { user };
  }
}
