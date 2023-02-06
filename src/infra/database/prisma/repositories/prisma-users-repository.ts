import { prisma } from '../prisma-client';

import { User } from '../../../../modules/account/entitties/user';
import { UsersRepository } from '../../../../modules/account/repositories/users-repository';
import { PrismaUserMapper } from '../mappers/prisma-user-mapper';

export class PrismaUsersRepository implements UsersRepository {
  async create(user: User): Promise<void> {
    const rawUser = PrismaUserMapper.toPrisma(user);

    await prisma.user.create({ data: rawUser });
  }

  async findById(userId: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      return null;
    }

    return PrismaUserMapper.toDomain(user);
  }

  async findByEmail(userEmail: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        email: userEmail,
      },
    });

    if (!user) {
      return null;
    }

    return PrismaUserMapper.toDomain(user);
  }

  async delete(id: string): Promise<void> {
    await prisma.user.delete({
      where: {
        id,
      },
    });
  }

  async update(user: User): Promise<void> {
    const rawUser = PrismaUserMapper.toPrisma(user);

    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: rawUser,
    });
  }

  async allUsers(): Promise<User[]> {
    const rawData = await prisma.user.findMany();

    const allUsers = rawData.map((data) => PrismaUserMapper.toDomain(data));

    return allUsers;
  }
}
