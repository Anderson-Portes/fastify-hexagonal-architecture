import { PermissionRepository } from "@/domain/repositories/permission.repository";
import { Permission } from "@/domain/entities/permission";

export class FindAllPermissionsUseCase {
  constructor(
    private readonly permissionRepository: PermissionRepository
  ) { }

  async execute(): Promise<Permission[]> {
    return this.permissionRepository.findAll()
  }
}