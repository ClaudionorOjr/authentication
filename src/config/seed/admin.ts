import { hash } from 'bcryptjs';
import { prisma } from '../../infra/database/prisma/prisma-client';

async function main() {
  const passwordHash = await hash(process.env.SEED_PASSWORD!, 10);

  await prisma.admin.create({
    data: {
      name: process.env.SEED_NAME!,
      surname: process.env.SEED_SURNAME!,
      email: process.env.SEED_EMAIL!,
      password: passwordHash,
    },
  });
}

main();
