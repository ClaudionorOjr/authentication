import { createAdminUseCase } from '../../modules/account/useCase/create/create-admin';

async function main() {
  await createAdminUseCase.execute({
    name: process.env.SEED_NAME!,
    surname: process.env.SEED_SURNAME!,
    email: process.env.SEED_EMAIL!,
    password: process.env.SEED_PASSWORD!,
  });
}

main();
