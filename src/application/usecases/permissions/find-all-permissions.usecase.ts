import { PermissionRepository } from "@/domain/repositories/permission.repository";
import { Permission } from "@/domain/entities/permission";

export class FindAllPermissionsUseCase {
  constructor(private readonly deps: { permissionsRepository: PermissionRepository }) {}

  async execute(): Promise<Permission[]> {
    return this.deps.permissionsRepository.findAll()
  }
}