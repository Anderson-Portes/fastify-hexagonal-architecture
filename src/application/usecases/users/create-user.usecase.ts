import { IUserRepository } from "@/domain/repositories/users.repository";
import { User } from "@/domain/entities/user";
import { CreateUserDto } from "@/application/dto/users/create-user.dto";
import bcrypt from "bcryptjs";

export class CreateUserUseCase {
  constructor(private readonly deps: { usersRepository: IUserRepository }) {}

  async execute(createUserDto: CreateUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10)
    const user = new User({ name: createUserDto.name, email: createUserDto.email, password: hashedPassword, roleId: createUserDto.roleId })
    return this.deps.usersRepository.create(user)
  }
}