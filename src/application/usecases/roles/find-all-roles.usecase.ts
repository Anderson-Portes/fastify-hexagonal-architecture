import { IRoleRepository } from "@/domain/repositories/irole.repository";
import { Role } from "@/domain/entities/role";

export class FindAllRolesUseCase {
  constructor(
    private readonly roleRepository: IRoleRepository
  ) { }

  async execute(): Promise<Role[]> {
    return this.roleRepository.findAll()
  }
}