import { FastifyReply, FastifyRequest } from "fastify";
import { createRoleSchema } from "../schemas/roles/create-role.schema";
import { CreateRoleUseCase } from "@/application/usecases/roles/create-role.usecase";
import { findRoleByIdSchema } from "../schemas/roles/find-role-by-id.schema";
import { FindRoleByIdUseCase } from "@/application/usecases/roles/find-role-by-id.usecase";
import { FindAllRolesUseCase } from "@/application/usecases/roles/find-all-roles.usecase";
import { DeleteRoleUseCase } from "@/application/usecases/roles/delete-role.usecase";
import { deleteRoleParamsSchema } from "../schemas/roles/delete-role.schema";
import { updateRoleParamsSchema, updateRoleSchema } from "../schemas/roles/update-role.schema";
import { UpdateRoleUseCase } from "@/application/usecases/roles/update-role.usecase";


export class RolesController {
  constructor(
    private readonly deps: {
      findAllRolesUseCase: FindAllRolesUseCase,
      createRoleUseCase: CreateRoleUseCase,
      findRoleByIdUseCase: FindRoleByIdUseCase,
      updateRoleUseCase: UpdateRoleUseCase,
      deleteRoleUseCase: DeleteRoleUseCase,
    }
  ) { }

  async findAll(request: FastifyRequest, reply: FastifyReply) {
    const roles = await this.deps.findAllRolesUseCase.execute()
    return reply.status(200).send(roles)
  }

  async findById(request: FastifyRequest, reply: FastifyReply) {
    const { id } = findRoleByIdSchema.parse(request.params)
    const role = await this.deps.findRoleByIdUseCase.execute(id)
    if (!role) {
      return reply.status(404).send({ message: "Role not found" })
    }
    return reply.status(200).send(role)
  }

  async create(request: FastifyRequest, reply: FastifyReply) {
    const data = createRoleSchema.parse(request.body)
    const role = await this.deps.createRoleUseCase.execute(data)
    return reply.status(201).send(role)
  }

  async update(request: FastifyRequest, reply: FastifyReply) {
    const { id } = updateRoleParamsSchema.parse(request.params)
    const data = updateRoleSchema.parse(request.body)
    const role = await this.deps.updateRoleUseCase.execute(id, data)
    return reply.status(200).send(role)
  }

  async delete(request: FastifyRequest, reply: FastifyReply) {
    const { id } = deleteRoleParamsSchema.parse(request.params)
    await this.deps.deleteRoleUseCase.execute(id)
    return reply.status(204).send({ message: "Role deleted successfully" })
  }
}