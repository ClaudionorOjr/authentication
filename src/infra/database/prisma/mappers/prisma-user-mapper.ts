import { User as RawUser } from '@prisma/client';
import { User } from '../../../../modules/account/entitties/user';

export class PrismaUserMapper {
  static toPrisma(user: User) {
    return {
      id: user.id,
      email: user.email,
      password: user.password,
      name: user.name,
      surname: user.surname,
      phone: user.phone,
      createdAt: user.createdAt,
    };
  }

  static toDomain(user: RawUser): User {
    return new User(
      {
        email: user.email,
        password: user.password,
        name: user.name,
        surname: user.surname,
        phone: user.phone,
        createdAt: user.createdAt,
      },
      user.id,
    );
  }
}
