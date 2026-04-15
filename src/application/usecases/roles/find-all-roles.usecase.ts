import { RoleRepository } from "@/domain/repositories/role.repository";
import { Role } from "@/domain/entities/role";

export class FindAllRolesUseCase {
  constructor(
    private readonly roleRepository: RoleRepository
  ) { }

  async execute(): Promise<Role[]> {
    return this.roleRepository.findAll()
  }
}