import { RoleRepository } from "@/domain/repositories/role.repository";
import { Role } from "@/domain/entities/role";
import { CreateRoleDto } from "@/application/dto/roles/create-role.dto";

export class CreateRoleUseCase {
  constructor(private readonly deps: { rolesRepository: RoleRepository }) {}

  async execute(createRoleDto: CreateRoleDto): Promise<Role> {
    const role = new Role({ name: createRoleDto.name })
    return this.deps.rolesRepository.create(role)
  }
}