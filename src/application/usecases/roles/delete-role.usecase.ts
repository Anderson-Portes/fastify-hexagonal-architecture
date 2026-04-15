import { RoleRepository } from "@/domain/repositories/role.repository";

export class DeleteRoleUseCase {
  constructor(
    private readonly roleRepository: RoleRepository
  ) { }

  async execute(id: string): Promise<void> {
    await this.roleRepository.delete(id)
  }
}