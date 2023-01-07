import { Router } from 'express';
import { AuthenticateAdminController } from '../../../modules/account/useCase/authentication/authenticate-admin/authenticate-admin-controller';

const adminRoutes = Router();

const authenticateAdminController = new AuthenticateAdminController();

adminRoutes.post('/auth', authenticateAdminController.handle);

export { adminRoutes };
