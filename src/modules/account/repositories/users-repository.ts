import { User } from '../entitties/user';

export abstract class UsersRepository {
  abstract create(user: User): Promise<void>;

  abstract findById(userId: string): Promise<User | null>;

  abstract findByEmail(userEmail: string): Promise<User | null>;

  abstract delete(id: string): Promise<void>;

  abstract allUsers(): Promise<User[]>;

  abstract update(user: User): Promise<void>;
}
