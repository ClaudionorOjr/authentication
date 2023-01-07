import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { prisma } from '../../../../../infra/database/prisma/prisma-client';
import { BadRequestError } from '../../../../../errors/app-error';

interface IAuthenticateAdmin {
  email: string;
  password: string;
}

export class AuthenticateAdminUseCase {
  async execute({ email, password }: IAuthenticateAdmin) {
    const admin = await prisma.admin.findUnique({
      where: {
        email,
      },
    });

    if (!admin) {
      throw new BadRequestError('Email or password incorrect!');
    }

    const passwordMatch = await compare(password, admin.password);

    if (!passwordMatch) {
      throw new BadRequestError('Email or password incorrect!');
    }

    const token = sign({}, process.env.ADMIN_SECRET!, {
      subject: admin.id,
      expiresIn: '1d',
    });

    return token;
  }
}
