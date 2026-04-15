import { IRoleRepository } from "@/domain/repositories/irole.repository";
import { Role } from "@/domain/entities/role";
import { CreateRoleDto } from "@/application/dto/roles/create-role.dto";

export class CreateRoleUseCase {
  constructor(
    private readonly roleRepository: IRoleRepository
  ) { }

  async execute(createRoleDto: CreateRoleDto): Promise<Role> {
    const role = new Role({ name: createRoleDto.name })
    return this.roleRepository.create(role)
  }
}