import { Role } from "../entities/role";

export interface RoleRepository {
  findAll(): Promise<Role[]>;
  findById(id: string): Promise<Role | null>;
  create(role: Role): Promise<Role>;
  update(id: string, role: Role): Promise<Role>;
  delete(id: string): Promise<void>;
  hasPermission(roleId: string, permissionName: string): Promise<boolean>;
  syncPermissions(roleId: string, permissionIds: string[]): Promise<void>;
}
