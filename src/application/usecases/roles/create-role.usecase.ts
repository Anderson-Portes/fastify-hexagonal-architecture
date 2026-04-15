import { RoleRepository } from "@/domain/repositories/role.repository";
import { Role } from "@/domain/entities/role";
import { CreateRoleDto } from "@/application/dto/roles/create-role.dto";

export class CreateRoleUseCase {
  constructor(private readonly deps: { rolesRepository: RoleRepository }) {}

  async execute(createRoleDto: CreateRoleDto): Promise<Role> {
    const role = new Role({ name: createRoleDto.name })
    const created = await this.deps.rolesRepository.create(role)
    await this.deps.rolesRepository.syncPermissions(created.id!, createRoleDto.permission_ids)
    return created
  }
}