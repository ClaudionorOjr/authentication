import { User } from '../entitties/user';

export abstract class UsersRepository {
  abstract create(user: User): Promise<void>;

  abstract findById(userId: string): Promise<User | null>;

  abstract findByEmail(userEmail: string): Promise<User | null>;
}
