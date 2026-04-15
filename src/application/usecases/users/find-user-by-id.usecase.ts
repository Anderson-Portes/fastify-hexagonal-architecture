
import { User } from "@/domain/entities/user";
import { IUserRepository } from "@/domain/repositories/users.repository";

export class FindUserByIdUseCase {
  constructor(
    private readonly userRepository: IUserRepository
  ) { }

  async execute(id: string): Promise<User | null> {
    return this.userRepository.findById(id)
  }
}