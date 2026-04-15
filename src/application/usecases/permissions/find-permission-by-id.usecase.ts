import { PermissionRepository } from "@/domain/repositories/permission.repository";
import { Permission } from "@/domain/entities/permission";

export class FindPermissionByIdUseCase {
  constructor(
    private readonly permissionRepository: PermissionRepository
  ) { }

  async execute(id: string): Promise<Permission | null> {
    return this.permissionRepository.findById(id)
  }
}