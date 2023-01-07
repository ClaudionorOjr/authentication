import { describe, it, expect } from 'vitest';
import { Admin } from './admin';
import { randomInt } from 'node:crypto';

describe('Admin', () => {
  it('should be able to create a admin', () => {
    const admin = new Admin({
      name: 'Bruce',
      surname: 'Wayne',
      email: 'brucewayne@email.com',
      password: randomInt(6).toString(),
    });

    expect(admin).toBeInstanceOf(Admin);
  });
});
