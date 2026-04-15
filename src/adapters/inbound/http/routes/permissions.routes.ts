import { FastifyInstance } from "fastify";
import { PermissionsController } from "../controllers/permissions.controller";
import { PermissionsDrizzleRepository } from "@/adapters/outbound/db/repositories/permissions-drizzle-repository";
import { FindAllPermissionsUseCase } from "@/application/usecases/permissions/find-all-permissions.usecase";
import { CreatePermissionUseCase } from "@/application/usecases/permissions/create-permission.usecase";
import { FindPermissionByIdUseCase } from "@/application/usecases/permissions/find-permission-by-id.usecase";
import { UpdatePermissionUseCase } from "@/application/usecases/permissions/update-permission.usecase";
import { DeletePermissionUseCase } from "@/application/usecases/permissions/delete-permission.usecase";

export const permissionsRoutes = (fastify: FastifyInstance) => {

  const permissionDrizzleRepository = new PermissionsDrizzleRepository()

  const findAllPermissionsUseCase = new FindAllPermissionsUseCase(permissionDrizzleRepository)
  const createPermissionUseCase = new CreatePermissionUseCase(permissionDrizzleRepository)
  const findPermissionByIdUseCase = new FindPermissionByIdUseCase(permissionDrizzleRepository)
  const updatePermissionUseCase = new UpdatePermissionUseCase(permissionDrizzleRepository)
  const deletePermissionUseCase = new DeletePermissionUseCase(permissionDrizzleRepository)

  const permissionsController = new PermissionsController(
    findAllPermissionsUseCase,
    createPermissionUseCase,
    findPermissionByIdUseCase,
    updatePermissionUseCase,
    deletePermissionUseCase
  )

  fastify.get("/", permissionsController.findAll.bind(permissionsController))
  fastify.get("/:id", permissionsController.findById.bind(permissionsController))
  fastify.post("/", permissionsController.create.bind(permissionsController))
  fastify.put("/:id", permissionsController.update.bind(permissionsController))
  fastify.delete("/:id", permissionsController.delete.bind(permissionsController))
}