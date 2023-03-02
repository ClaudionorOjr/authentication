import { Admin as RawAdmin } from '@prisma/client';
import { Admin } from '../../../../modules/account/entitties/admin';

export class PrismaAdminMapper {
  static toPrisma(admin: Admin) {
    return {
      id: admin.id,
      name: admin.name,
      surname: admin.surname,
      email: admin.email,
      password: admin.password,
    };
  }

  static toDomain(admin: RawAdmin): Admin {
    return new Admin(
      {
        name: admin.name,
        surname: admin.surname,
        email: admin.email,
        password: admin.password,
      },
      admin.id,
    );
  }
}
