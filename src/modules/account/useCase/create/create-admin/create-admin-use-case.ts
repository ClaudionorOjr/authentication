import { hash } from 'bcryptjs';
import { BadRequestError } from '../../../../../errors/app-error';
import { Admin } from '../../../entitties/admin';
import { AdminRepository } from '../../../repositories/admin-repository';

interface CreateAdminRequest {
  name: string;
  surname: string;
  email: string;
  password: string;
}

export class CreateAdminUseCase {
  constructor(private adminRepository: AdminRepository) {}

  async execute({ name, surname, email, password }: CreateAdminRequest) {
    const adminExists = await this.adminRepository.findyByEmail(email);

    if (adminExists) {
      throw new BadRequestError('Admin already exists!');
    }

    const passwordHash = await hash(password, 10);

    const admin = new Admin({
      name,
      surname,
      email,
      password: passwordHash,
    });

    await this.adminRepository.create(admin);
  }
}
