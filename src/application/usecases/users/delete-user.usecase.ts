import { IUserRepository } from "@/domain/repositories/users.repository";

export class DeleteUserUseCase {
  constructor(
    private readonly userRepository: IUserRepository
  ) { }

  async execute(id: string): Promise<void> {
    await this.userRepository.delete(id)
  }
}