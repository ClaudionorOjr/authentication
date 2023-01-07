import { Router } from 'express';
import { authenticateUserController } from '../../../modules/account/useCase/authentication/authenticate-user';
import { createUserController } from '../../../modules/account/useCase/create-user';

const userRoutes = Router();

userRoutes.post('/auth', authenticateUserController.handle);
userRoutes.post('/', createUserController.handle);

export { userRoutes };
