import { AdminRepository } from '../../../repositories/admin-repository';

interface UpdateAdminRequest {
  id: string;
  name?: string;
  surname?: string;
}

export class UpdateAdminUseCase {
  constructor(private adminRepository: AdminRepository) {}

  async execute({ id, name, surname }: UpdateAdminRequest) {
    const admin = await this.adminRepository.findyById(id);

    Object.assign(admin, {
      name: name ? name : admin.name,
      surname: surname ? surname : admin.surname,
    });

    await this.adminRepository.update(admin);
  }
}
