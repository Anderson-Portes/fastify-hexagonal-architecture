import { Role } from "../entities/role";

export interface IRoleRepository {
  findAll(): Promise<Role[]>;
  findById(id: string): Promise<Role | null>;
  create(role: Role): Promise<Role>;
  update(id: string, role: Role): Promise<Role>;
  delete(id: string): Promise<void>;
}
