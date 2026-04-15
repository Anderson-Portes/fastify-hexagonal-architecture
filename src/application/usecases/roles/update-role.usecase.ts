import { IRoleRepository } from "@/domain/repositories/irole.repository";
import { Role } from "@/domain/entities/role";
import { UpdateRoleDto } from "@/application/dto/roles/update-role.dto";

export class UpdateRoleUseCase {
  constructor(
    private readonly roleRepository: IRoleRepository
  ) { }

  async execute(id: string, updateRoleDto: UpdateRoleDto): Promise<Role> {
    const role = new Role({ name: updateRoleDto.name })
    return this.roleRepository.update(id, role)
  }
}