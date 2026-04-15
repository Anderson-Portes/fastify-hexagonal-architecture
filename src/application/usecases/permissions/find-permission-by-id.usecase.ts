import { IPermissionRepository } from "@/domain/repositories/ipermission.repository";
import { Permission } from "@/domain/entities/permission";

export class FindPermissionByIdUseCase {
  constructor(
    private readonly permissionRepository: IPermissionRepository
  ) { }

  async execute(id: string): Promise<Permission | null> {
    return this.permissionRepository.findById(id)
  }
}