import { FastifyInstance, FastifyPluginOptions } from "fastify"
import { RolesController } from "../controllers/roles.controller"
import { FindAllRolesUseCase } from "@/application/usecases/roles/find-all-roles.usecase"
import { CreateRoleUseCase } from "@/application/usecases/roles/create-role.usecase"
import { FindRoleByIdUseCase } from "@/application/usecases/roles/find-role-by-id.usecase"
import { UpdateRoleUseCase } from "@/application/usecases/roles/update-role.usecase"
import { DeleteRoleUseCase } from "@/application/usecases/roles/delete-role.usecase"
import { RolesDrizzleRepository } from "@/adapters/outbound/db/repositories/roles.drizzle-repository"

export const rolesRoutes = async (fastify: FastifyInstance, options: FastifyPluginOptions) => {
  const rolesDrizzleRepository = new RolesDrizzleRepository()

  const findAllRolesUseCase = new FindAllRolesUseCase(rolesDrizzleRepository)
  const createRoleUseCase = new CreateRoleUseCase(rolesDrizzleRepository)
  const findRoleByIdUseCase = new FindRoleByIdUseCase(rolesDrizzleRepository)
  const updateRoleUseCase = new UpdateRoleUseCase(rolesDrizzleRepository)
  const deleteRoleUseCase = new DeleteRoleUseCase(rolesDrizzleRepository)

  const rolesController = new RolesController(
    findAllRolesUseCase,
    createRoleUseCase,
    findRoleByIdUseCase,
    updateRoleUseCase,
    deleteRoleUseCase
  )

  fastify.get("/", rolesController.findAll.bind(rolesController))
  fastify.get("/:id", rolesController.findById.bind(rolesController))
  fastify.post("/", rolesController.create.bind(rolesController))
  fastify.put("/:id", rolesController.update.bind(rolesController))
  fastify.delete("/:id", rolesController.delete.bind(rolesController))
}