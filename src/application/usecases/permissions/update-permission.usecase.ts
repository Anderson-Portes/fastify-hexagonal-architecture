import { PermissionRepository } from "@/domain/repositories/permission.repository";
import { Permission } from "@/domain/entities/permission";
import { UpdatePermissionDto } from "@/application/dto/permissions/update-permission.dto";

export class UpdatePermissionUseCase {
  constructor(
    private readonly permissionRepository: PermissionRepository
  ) { }

  async execute(id: string, updatePermissionDto: UpdatePermissionDto): Promise<Permission> {
    const permission = new Permission({ name: updatePermissionDto.name })
    return this.permissionRepository.update(id, permission)
  }
}