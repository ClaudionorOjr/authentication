import { User } from '../../entitties/user';
import { UsersRepository } from '../users-repository';

export class InMemoryUsersRepository implements UsersRepository {
  public users: User[] = [];

  async create(user: User): Promise<void> {
    this.users.push(user);
  }

  async findById(userId: string): Promise<User | null> {
    const user = this.users.find((user) => {
      user.id === userId;
    });

    if (!user) {
      return null;
    }

    return user;
  }

  async findByEmail(userEmail: string): Promise<User | null> {
    const user = this.users.find((user) => {
      user.email === userEmail;
    });

    if (!user) {
      return null;
    }

    return user;
  }
}
