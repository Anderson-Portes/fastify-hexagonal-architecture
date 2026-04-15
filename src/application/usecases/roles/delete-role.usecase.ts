import { RoleRepository } from "@/domain/repositories/role.repository";

export class DeleteRoleUseCase {
  constructor(private readonly deps: { rolesRepository: RoleRepository }) {}

  async execute(id: string): Promise<void> {
    await this.deps.rolesRepository.delete(id)
  }
}