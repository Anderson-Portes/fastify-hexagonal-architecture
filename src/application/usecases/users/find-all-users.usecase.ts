import { IUserRepository } from "@/domain/repositories/users.repository";
import { User } from "@/domain/entities/user";

export class FindAllUsersUseCase {
  constructor(
    private readonly userRepository: IUserRepository
  ) { }

  async execute(): Promise<User[]> {
    return this.userRepository.findAll()
  }
}