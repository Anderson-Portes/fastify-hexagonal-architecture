export interface UpdateUserDto {
  name: string;
  email: string;
  password?: string;
  roleId: string;
}