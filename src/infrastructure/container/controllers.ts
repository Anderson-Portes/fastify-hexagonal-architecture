import { RolesController } from "@/adapters/inbound/http/controllers/roles.controller";
import { PermissionsController } from "@/adapters/inbound/http/controllers/permissions.controller";
import { UsersController } from "@/adapters/inbound/http/controllers/users.controller";
import { asClass } from "awilix";

export const controllers = {
  rolesController: asClass(RolesController).scoped(),
  permissionsController: asClass(PermissionsController).scoped(),
  usersController: asClass(UsersController).scoped()
}