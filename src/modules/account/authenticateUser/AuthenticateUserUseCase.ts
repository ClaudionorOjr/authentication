import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"
import { prisma } from "../../../database/prismaClient"

interface IAuthenticateUser {
  email: string
  password: string
}

export class AuthenticateUserUseCase {

  async execute({ email, password}: IAuthenticateUser){

    const userExists = await prisma.user.findFirst({
      where:{
        email: {
          equals: email
        }
      }
    })

    if(!userExists){
      throw new Error("Email or password incorrect.")
    }

    const passwordMatch = await compare(password, userExists.password)

    if(!passwordMatch) {
      throw new Error("Email or password incorrect.")
    }

    const token = sign({email}, "3d47ef7cc4f14333bea220170021023f", {
      subject: userExists.id,
      expiresIn: "1d"
    })

    return token
  }
}