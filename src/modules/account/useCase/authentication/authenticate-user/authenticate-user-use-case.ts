import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { UsersRepository } from '../../../repositories/users-repository';

interface AuthenticateUserRequest {
  email: string;
  password: string;
}

interface AuthenticateUserResponse {
  token: string;
}

export class AuthenticateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    email,
    password,
  }: AuthenticateUserRequest): Promise<AuthenticateUserResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new Error('Email or password incorrect! ENTROU AQUI');
    }

    const passwordMatch = await compare(password, user.password);
    console.log(passwordMatch);

    if (!passwordMatch) {
      throw new Error('Email or password incorrect!');
    }

    const token = sign(
      { name: user.name, surname: user.surname },
      process.env.USER_SECRET!,
      {
        subject: user.id,
        expiresIn: '1d',
      },
    );

    return { token };

    // const user = await prisma.user.findFirst({
    //   where: {
    //     email: {
    //       equals: email,
    //     },
    //   },
    // });

    // if (!user) {
    //   throw new BadRequestError('Email or password incorrect!');
    // }

    // const passwordMatch = await compare(password, user.password);

    // if (!passwordMatch) {
    //   throw new BadRequestError('Email or password incorrect!');
    // }

    // /* Ferramentas do JWT
    //  * "iss" O domínio da aplicação geradora do token;
    //  * "sub" Asssunto do token, muito utilizado para guardar o ID do usuário;
    //  * "aud" Define quem pode user o token;
    //  * "exp" Data para expiração do token;
    //  * "nbf" Define uma data para qual o token não pode ser aceito antes dela;
    //  * "iat" Data de criação do token;
    //  * "jti" O id do token;
    //  */

    // const token = sign(
    //   { name: user.name, surname: user.surname },
    //   process.env.USER_SECRET!,
    //   {
    //     subject: user.id,
    //     expiresIn: '20s',
    //   },
    // );

    // return token;
  }
}
