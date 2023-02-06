import { Router } from 'express';
import { AllUsersController } from '../../../modules/account/useCase/all-users/all-users-controller';
import { AuthenticateUserController } from '../../../modules/account/useCase/authentication/authenticate-user/authenticate-user-controller';
import { CreateUserController } from '../../../modules/account/useCase/create/create-user/create-user-controller';
import { DeleteUserController } from '../../../modules/account/useCase/delete/delete-user/delete-user-controller';
import { UpdateUserController } from '../../../modules/account/useCase/update/update-user/update-user-controller';
import { ensureAuthenticateUser } from '../middlewares/ensure-authenticate-user';

const userRoutes = Router();

const authenticateUserController = new AuthenticateUserController();
const createUserController = new CreateUserController();
const allUsersController = new AllUsersController();

const updateUserController = new UpdateUserController();

const deleteUserController = new DeleteUserController();

userRoutes.post('/auth', authenticateUserController.handle);
userRoutes.post('/', createUserController.handle);
userRoutes.get('/', allUsersController.handle);

userRoutes.put('/update', ensureAuthenticateUser, updateUserController.handle);

userRoutes.delete(
  '/delete',
  ensureAuthenticateUser,
  deleteUserController.handle,
);

export { userRoutes };
