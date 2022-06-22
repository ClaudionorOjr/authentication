import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {

  async handle(request: Request, response: Response){
    const { email, password } = request.body

    const createUserUseCase = new CreateUserUseCase()

    await createUserUseCase.execute({ email, password})

    return response.status(201).send()
  }
}