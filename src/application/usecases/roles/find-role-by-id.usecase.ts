import { RoleRepository } from "@/domain/repositories/role.repository";
import { Role } from "@/domain/entities/role";

export class FindRoleByIdUseCase {
  constructor(
    private readonly roleRepository: RoleRepository
  ) { }

  async execute(id: string): Promise<Role | null> {
    return this.roleRepository.findById(id)
  }
}