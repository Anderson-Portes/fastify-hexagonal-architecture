import { FastifyReply, FastifyRequest } from "fastify";
import { loginSchema } from "../schemas/auth/login.schema";
import { LoginUseCase } from "@/application/usecases/auth/login.usecase";
import { FindUserByIdUseCase } from "@/application/usecases/users/find-user-by-id.usecase";

export class AuthController {
  constructor(
    private readonly deps: {
      loginUseCase: LoginUseCase;
      findUserByIdUseCase: FindUserByIdUseCase;
    }
  ) { }

  async login(request: FastifyRequest, reply: FastifyReply) {
    const data = loginSchema.parse(request.body)
    return await this.deps.loginUseCase.execute(data)
  }

  async profile(request: FastifyRequest, reply: FastifyReply) {
    const user = await this.deps.findUserByIdUseCase.execute(request.user.id!)
    if (!user) {
      return reply.status(404).send({ message: "User not found" })
    }
    const { password, ...profile } = user
    return reply.status(200).send(profile)
  }
}