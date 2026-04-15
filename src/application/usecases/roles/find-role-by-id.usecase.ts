import { IRoleRepository } from "@/domain/repositories/irole.repository";
import { Role } from "@/domain/entities/role";

export class FindRoleByIdUseCase {
  constructor(
    private readonly roleRepository: IRoleRepository
  ) { }

  async execute(id: string): Promise<Role | null> {
    return this.roleRepository.findById(id)
  }
}