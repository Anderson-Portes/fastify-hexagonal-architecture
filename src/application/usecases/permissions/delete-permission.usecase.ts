import { IPermissionRepository } from "@/domain/repositories/ipermission.repository";

export class DeletePermissionUseCase {
  constructor(
    private readonly permissionRepository: IPermissionRepository
  ) { }

  async execute(id: string): Promise<void> {
    await this.permissionRepository.delete(id)
  }
}