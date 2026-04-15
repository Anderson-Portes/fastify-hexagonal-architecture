import { FastifyPluginAsync } from "fastify";
import { UsersController } from "../controllers/users.controller";
import { FindAllUsersUseCase } from "@/application/usecases/users/find-all-users.usecase";
import { CreateUserUseCase } from "@/application/usecases/users/create-user.usecase";
import { FindUserByIdUseCase } from "@/application/usecases/users/find-user-by-id.usecase";
import { UpdateUserUseCase } from "@/application/usecases/users/update-user.usecase";
import { DeleteUserUseCase } from "@/application/usecases/users/delete-user.usecase";
import { UsersDrizzleRepository } from "@/adapters/outbound/db/repositories/users.drizzle-repository";

export const usersRoutes: FastifyPluginAsync = async (fastify, options) => {
  const usersDrizzleRepository = new UsersDrizzleRepository()

  const findAllUsersUseCase = new FindAllUsersUseCase(usersDrizzleRepository)
  const createUserUseCase = new CreateUserUseCase(usersDrizzleRepository)
  const findUserByIdUseCase = new FindUserByIdUseCase(usersDrizzleRepository)
  const updateUserUseCase = new UpdateUserUseCase(usersDrizzleRepository)
  const deleteUserUseCase = new DeleteUserUseCase(usersDrizzleRepository)

  const usersController = new UsersController(
    findAllUsersUseCase,
    createUserUseCase,
    findUserByIdUseCase,
    updateUserUseCase,
    deleteUserUseCase
  )
  fastify.get("/", usersController.findAll.bind(usersController))
  fastify.get("/:id", usersController.findById.bind(usersController))
  fastify.post("/", usersController.create.bind(usersController))
  fastify.put("/:id", usersController.update.bind(usersController))
  fastify.delete("/:id", usersController.delete.bind(usersController))
}