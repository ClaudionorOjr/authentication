import { NotFoundError } from '../../../../../errors/app-error';
import { UsersRepository } from '../../../repositories/users-repository';

interface UpdateUserRequest {
  id: string;
  name?: string;
  surname?: string;
  phone?: string;
}

export class UpdateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({ id, name, surname, phone }: UpdateUserRequest) {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new NotFoundError('User does not exists!');
    }

    //* Se a propriedade existir, o atributo vai receber o valor que vem nele, se não, permanece os dados que já estão no BD.
    Object.assign(user, {
      name: name ? name : user.name,
      surname: surname ? surname : user.surname,
      phone: phone ? phone : user.phone,
    });

    //! Retirar console.log
    console.log(user);
    await this.usersRepository.update(user);
  }
}
