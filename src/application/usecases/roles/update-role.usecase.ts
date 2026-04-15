import { RoleRepository } from "@/domain/repositories/role.repository";
import { Role } from "@/domain/entities/role";
import { UpdateRoleDto } from "@/application/dto/roles/update-role.dto";

export class UpdateRoleUseCase {
  constructor(private readonly deps: { rolesRepository: RoleRepository }) {}

  async execute(id: string, updateRoleDto: UpdateRoleDto): Promise<Role> {
    const role = new Role({ name: updateRoleDto.name })
    return this.deps.rolesRepository.update(id, role)
  }
}