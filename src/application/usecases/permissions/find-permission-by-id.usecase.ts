import { PermissionRepository } from "@/domain/repositories/permission.repository";
import { Permission } from "@/domain/entities/permission";

export class FindPermissionByIdUseCase {
  constructor(private readonly deps: { permissionsRepository: PermissionRepository }) {}

  async execute(id: string): Promise<Permission | null> {
    return this.deps.permissionsRepository.findById(id)
  }
}