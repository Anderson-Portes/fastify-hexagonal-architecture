import { IPermissionRepository } from "@/domain/repositories/ipermission.repository";
import { Permission } from "@/domain/entities/permission";
import { CreatePermissionDto } from "@/application/dto/permissions/create-permission.dto";

export class CreatePermissionUseCase {
  constructor(
    private readonly permissionRepository: IPermissionRepository
  ) { }

  async execute(createPermissionDto: CreatePermissionDto): Promise<Permission> {
    const permission = new Permission({ name: createPermissionDto.name })
    return this.permissionRepository.create(permission)
  }
}