import { IUserRepository } from "@/domain/repositories/users.repository";
import { User } from "@/domain/entities/user";
import { UpdateUserDto } from "@/application/dto/users/update-user.dto";
import bcrypt from "bcryptjs";

export class UpdateUserUseCase {
  constructor(
    private readonly userRepository: IUserRepository
  ) { }

  async execute(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    if (updateUserDto.password !== undefined) {
      updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10)
    }
    const user = new User({ name: updateUserDto.name, email: updateUserDto.email, password: updateUserDto.password, roleId: updateUserDto.roleId })
    return this.userRepository.update(id, user)
  }
}