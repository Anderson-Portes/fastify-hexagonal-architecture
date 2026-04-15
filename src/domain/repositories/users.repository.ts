import { User } from "../entities/user";

export interface IUserRepository {
  findAll(): Promise<User[]>
  findById(id: string): Promise<User | null>
  create(data: User): Promise<User>
  update(id: string, data: User): Promise<User>
  delete(id: string): Promise<void>
}