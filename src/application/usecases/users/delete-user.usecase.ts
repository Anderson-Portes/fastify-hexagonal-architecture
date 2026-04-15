import { IUserRepository } from "@/domain/repositories/users.repository";

export class DeleteUserUseCase {
  constructor(private readonly deps: { usersRepository: IUserRepository }) {}

  async execute(id: string): Promise<void> {
    await this.deps.usersRepository.delete(id)
  }
}