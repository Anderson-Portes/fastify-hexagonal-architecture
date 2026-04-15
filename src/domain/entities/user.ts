export class User {
  id?: string
  name: string;
  email: string;
  password?: string;
  roleId: string;
  createdAt?: Date
  updatedAt?: Date

  constructor({ id, name, email, password, roleId, createdAt, updatedAt }: { id?: string; name: string; email: string; password?: string; roleId: string; createdAt?: Date; updatedAt?: Date }) {
    this.id = id
    this.name = name
    this.email = email
    this.password = password
    this.roleId = roleId
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }
}