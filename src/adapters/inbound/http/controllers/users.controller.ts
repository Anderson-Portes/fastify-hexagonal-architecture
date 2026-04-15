import { FastifyReply, FastifyRequest } from "fastify";
import { CreateUserUseCase } from "@/application/usecases/users/create-user.usecase";
import { FindAllUsersUseCase } from "@/application/usecases/users/find-all-users.usecase";
import { FindUserByIdUseCase } from "@/application/usecases/users/find-user-by-id.usecase";
import { UpdateUserUseCase } from "@/application/usecases/users/update-user.usecase";
import { DeleteUserUseCase } from "@/application/usecases/users/delete-user.usecase";
import { createUserSchema } from "../schemas/users/create-user.schema";
import { findUserByIdSchema } from "../schemas/users/find-user-by-id.schema";
import { updateUserParamsSchema, updateUserSchema } from "../schemas/users/update-user.schema";
import { deleteUserParamsSchema } from "../schemas/users/delete-user.schema";

export class UsersController {
  constructor(
    private readonly findAllUsersUseCase: FindAllUsersUseCase,
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly findUserByIdUseCase: FindUserByIdUseCase,
    private readonly updateUserUseCase: UpdateUserUseCase,
    private readonly deleteUserUseCase: DeleteUserUseCase
  ) { }

  async findAll(request: FastifyRequest, reply: FastifyReply) {
    const users = await this.findAllUsersUseCase.execute()
    return reply.status(200).send(users)
  }

  async findById(request: FastifyRequest, reply: FastifyReply) {
    const { id } = findUserByIdSchema.parse(request.params)
    const user = await this.findUserByIdUseCase.execute(id)
    if (!user) {
      return reply.status(404).send({ message: "User not found" })
    }
    return reply.status(200).send(user)
  }

  async create(request: FastifyRequest, reply: FastifyReply) {
    const data = createUserSchema.parse(request.body)
    const user = await this.createUserUseCase.execute(data)
    return reply.status(201).send(user)
  }

  async update(request: FastifyRequest, reply: FastifyReply) {
    const { id } = updateUserParamsSchema.parse(request.params)
    const data = updateUserSchema.parse(request.body)
    const user = await this.updateUserUseCase.execute(id, data)
    return reply.status(200).send(user)
  }

  async delete(request: FastifyRequest, reply: FastifyReply) {
    const { id } = deleteUserParamsSchema.parse(request.params)
    await this.deleteUserUseCase.execute(id)
    return reply.status(204).send({ message: "User deleted successfully" })
  }
}