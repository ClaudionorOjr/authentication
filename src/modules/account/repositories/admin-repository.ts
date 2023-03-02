import { Admin } from '../entitties/admin';

export abstract class AdminRepository {
  abstract create(admin: Admin): Promise<void>;

  abstract findyById(id: string): Promise<Admin | null>;

  abstract findyByEmail(email: string): Promise<Admin | null>;

  abstract update(admin: Admin): Promise<void>;
}
