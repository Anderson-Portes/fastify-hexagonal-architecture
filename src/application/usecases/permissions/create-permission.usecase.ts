import { PermissionRepository } from "@/domain/repositories/permission.repository";
import { Permission } from "@/domain/entities/permission";
import { CreatePermissionDto } from "@/application/dto/permissions/create-permission.dto";

export class CreatePermissionUseCase {
  constructor(private readonly deps: { permissionsRepository: PermissionRepository }) {}

  async execute(createPermissionDto: CreatePermissionDto): Promise<Permission> {
    const permission = new Permission({ name: createPermissionDto.name })
    return this.deps.permissionsRepository.create(permission)
  }
}