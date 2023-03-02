import { prisma } from '../prisma-client';

import { Admin } from '../../../../modules/account/entitties/admin';
import { AdminRepository } from '../../../../modules/account/repositories/admin-repository';
import { PrismaAdminMapper } from '../mappers/prisma-admin-mapper';

export class PrismaAdminRepository implements AdminRepository {
  async create(admin: Admin): Promise<void> {
    const rawAdmin = PrismaAdminMapper.toPrisma(admin);

    await prisma.admin.create({ data: rawAdmin });
  }

  async findyById(id: string): Promise<Admin | null> {
    throw new Error('Method not implemented.');
  }

  async findyByEmail(email: string): Promise<Admin | null> {
    const admin = await prisma.admin.findUnique({
      where: {
        email,
      },
    });

    if (!admin) {
      return null;
    }

    return PrismaAdminMapper.toDomain(admin);
  }

  async update(admin: Admin): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
