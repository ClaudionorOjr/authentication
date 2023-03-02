import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { BadRequestError } from '../../../../../errors/app-error';
import { AdminRepository } from '../../../repositories/admin-repository';

interface AuthenticateAdminRequest {
  email: string;
  password: string;
}

export class AuthenticateAdminUseCase {
  constructor(private adminRepository: AdminRepository) {}

  async execute({ email, password }: AuthenticateAdminRequest) {
    const admin = await this.adminRepository.findyByEmail(email);

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

    return { token };
  }
}
