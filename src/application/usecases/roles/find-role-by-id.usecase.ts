import { RoleRepository } from "@/domain/repositories/role.repository";
import { Role } from "@/domain/entities/role";

export class FindRoleByIdUseCase {
  constructor(private readonly deps: { rolesRepository: RoleRepository }) {}

  async execute(id: string): Promise<Role | null> {
    return this.deps.rolesRepository.findById(id)
  }
}