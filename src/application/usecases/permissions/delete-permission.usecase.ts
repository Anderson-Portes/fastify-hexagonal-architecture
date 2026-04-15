import { PermissionRepository } from "@/domain/repositories/permission.repository";

export class DeletePermissionUseCase {
  constructor(
    private readonly permissionRepository: PermissionRepository
  ) { }

  async execute(id: string): Promise<void> {
    await this.permissionRepository.delete(id)
  }
}