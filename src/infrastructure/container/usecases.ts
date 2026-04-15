import { FindAllRolesUseCase } from "@/application/usecases/roles/find-all-roles.usecase";
import { CreateRoleUseCase } from "@/application/usecases/roles/create-role.usecase";
import { FindRoleByIdUseCase } from "@/application/usecases/roles/find-role-by-id.usecase";
import { UpdateRoleUseCase } from "@/application/usecases/roles/update-role.usecase";
import { DeleteRoleUseCase } from "@/application/usecases/roles/delete-role.usecase";
import { FindAllPermissionsUseCase } from "@/application/usecases/permissions/find-all-permissions.usecase";
import { CreatePermissionUseCase } from "@/application/usecases/permissions/create-permission.usecase";
import { FindPermissionByIdUseCase } from "@/application/usecases/permissions/find-permission-by-id.usecase";
import { UpdatePermissionUseCase } from "@/application/usecases/permissions/update-permission.usecase";
import { DeletePermissionUseCase } from "@/application/usecases/permissions/delete-permission.usecase";
import { FindAllUsersUseCase } from "@/application/usecases/users/find-all-users.usecase";
import { CreateUserUseCase } from "@/application/usecases/users/create-user.usecase";
import { FindUserByIdUseCase } from "@/application/usecases/users/find-user-by-id.usecase";
import { UpdateUserUseCase } from "@/application/usecases/users/update-user.usecase";
import { DeleteUserUseCase } from "@/application/usecases/users/delete-user.usecase";
import { asClass } from "awilix";
import { LoginUseCase } from "@/application/usecases/auth/login.usecase";

export const usecases = {
  findAllRolesUseCase: asClass(FindAllRolesUseCase).scoped(),
  createRoleUseCase: asClass(CreateRoleUseCase).scoped(),
  findRoleByIdUseCase: asClass(FindRoleByIdUseCase).scoped(),
  updateRoleUseCase: asClass(UpdateRoleUseCase).scoped(),
  deleteRoleUseCase: asClass(DeleteRoleUseCase).scoped(),

  findAllPermissionsUseCase: asClass(FindAllPermissionsUseCase).scoped(),
  createPermissionUseCase: asClass(CreatePermissionUseCase).scoped(),
  findPermissionByIdUseCase: asClass(FindPermissionByIdUseCase).scoped(),
  updatePermissionUseCase: asClass(UpdatePermissionUseCase).scoped(),
  deletePermissionUseCase: asClass(DeletePermissionUseCase).scoped(),

  findAllUsersUseCase: asClass(FindAllUsersUseCase).scoped(),
  createUserUseCase: asClass(CreateUserUseCase).scoped(),
  findUserByIdUseCase: asClass(FindUserByIdUseCase).scoped(),
  updateUserUseCase: asClass(UpdateUserUseCase).scoped(),
  deleteUserUseCase: asClass(DeleteUserUseCase).scoped(),

  loginUseCase: asClass(LoginUseCase).scoped()
}