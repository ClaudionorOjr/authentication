import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";

interface ICreateUser {
  email: string
  password: string
}

export class CreateUserUseCase {
  async execute({ email, password}: ICreateUser){

    const userExists = await prisma.user.findFirst({
      where: {
        email: {
          equals: email
        }
      }
    })

    if(userExists){
      throw new Error("User already exist.")
    }

    const passwordHash = await hash(password, 10)

    await prisma.user.create({
      data: {
        email: email,
        password: passwordHash
      }
    })
  }
}