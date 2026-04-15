import { PermissionRepository } from "@/domain/repositories/permission.repository";

export class DeletePermissionUseCase {
  constructor(private readonly deps: { permissionsRepository: PermissionRepository }) {}

  async execute(id: string): Promise<void> {
    await this.deps.permissionsRepository.delete(id)
  }
}