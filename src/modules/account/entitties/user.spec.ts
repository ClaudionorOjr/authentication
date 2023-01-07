import { describe, it, expect } from 'vitest';
import { User } from './user';
import { randomInt } from 'node:crypto';

describe('User', () => {
  it('should be able to create a user', () => {
    const user = new User({
      name: 'Clark',
      surname: 'Kent',
      email: 'clarkkent@email.com',
      password: randomInt(6).toString(),
      phone: '(80)999999999',
    });

    expect(user).toBeInstanceOf(User);
  });
});
