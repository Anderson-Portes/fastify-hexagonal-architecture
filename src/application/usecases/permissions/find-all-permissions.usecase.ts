import { IPermissionRepository } from "@/domain/repositories/ipermission.repository";
import { Permission } from "@/domain/entities/permission";

export class FindAllPermissionsUseCase {
  constructor(
    private readonly permissionRepository: IPermissionRepository
  ) { }

  async execute(): Promise<Permission[]> {
    return this.permissionRepository.findAll()
  }
}