import { Permission } from "../entities/permission";

export interface IPermissionRepository {
  create(data: Permission): Promise<Permission>
  findAll(): Promise<Permission[]>
  findById(id: string): Promise<Permission | null>
  update(id: string, data: Permission): Promise<Permission>
  delete(id: string): Promise<void>
}