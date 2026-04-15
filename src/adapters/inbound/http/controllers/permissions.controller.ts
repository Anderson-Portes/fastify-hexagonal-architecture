import { CreatePermissionUseCase } from "@/application/usecases/permissions/create-permission.usecase";
import { DeletePermissionUseCase } from "@/application/usecases/permissions/delete-permission.usecase";
import { FindAllPermissionsUseCase } from "@/application/usecases/permissions/find-all-permissions.usecase";
import { FindPermissionByIdUseCase } from "@/application/usecases/permissions/find-permission-by-id.usecase";
import { UpdatePermissionUseCase } from "@/application/usecases/permissions/update-permission.usecase";
import { FastifyReply, FastifyRequest } from "fastify";
import { findPermissionByIdSchema } from "../schemas/permissions/find-permission-by-id.schema";
import { createPermissionSchema } from "../schemas/permissions/create-permission.schema";
import { updatePermissionParamsSchema, updatePermissionSchema } from "../schemas/permissions/update-permission.schema";
import { deletePermissionParamsSchema } from "../schemas/permissions/delete-permission.schema";

export class PermissionsController {
  constructor(
    private readonly findAllPermissionsUseCase: FindAllPermissionsUseCase,
    private readonly createPermissionUseCase: CreatePermissionUseCase,
    private readonly findPermissionByIdUseCase: FindPermissionByIdUseCase,
    private readonly updatePermissionUseCase: UpdatePermissionUseCase,
    private readonly deletePermissionUseCase: DeletePermissionUseCase,
  ) { }

  async findAll(request: FastifyRequest, reply: FastifyReply) {
    const permissions = await this.findAllPermissionsUseCase.execute()
    return reply.status(200).send(permissions)
  }

  async findById(request: FastifyRequest, reply: FastifyReply) {
    const { id } = findPermissionByIdSchema.parse(request.params)
    const permission = await this.findPermissionByIdUseCase.execute(id)
    if (!permission) {
      return reply.status(404).send({ message: "Permission not found" })
    }
    return reply.status(200).send(permission)
  }

  async create(request: FastifyRequest, reply: FastifyReply) {
    const data = createPermissionSchema.parse(request.body)
    const permission = await this.createPermissionUseCase.execute(data)
    return reply.status(201).send(permission)
  }

  async update(request: FastifyRequest, reply: FastifyReply) {
    const { id } = updatePermissionParamsSchema.parse(request.params)
    const data = updatePermissionSchema.parse(request.body)
    const permission = await this.updatePermissionUseCase.execute(id, data)
    return reply.status(200).send(permission)
  }

  async delete(request: FastifyRequest, reply: FastifyReply) {
    const { id } = deletePermissionParamsSchema.parse(request.params)
    await this.deletePermissionUseCase.execute(id)
    return reply.status(204).send({ message: "Permission deleted successfully" })
  }
}