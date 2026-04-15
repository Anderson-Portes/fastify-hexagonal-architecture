import { IRoleRepository } from "@/domain/repositories/irole.repository";

export class DeleteRoleUseCase {
  constructor(
    private readonly roleRepository: IRoleRepository
  ) { }

  async execute(id: string): Promise<void> {
    await this.roleRepository.delete(id)
  }
}