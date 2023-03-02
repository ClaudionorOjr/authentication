import { Router } from 'express';
import { AuthenticateAdminController } from '../../../modules/account/useCase/authentication/authenticate-admin/authenticate-admin-controller';
import { UpdateAdminController } from '../../../modules/account/useCase/update/update-admin/update-admin-controller';
import { ensureAuthenticateAdmin } from '../middlewares/ensure-authenticate-admin';

const adminRoutes = Router();

const authenticateAdminController = new AuthenticateAdminController();
const updateAdminController = new UpdateAdminController();

adminRoutes.post('/auth', authenticateAdminController.handle);

adminRoutes.put(
  '/update',
  ensureAuthenticateAdmin,
  updateAdminController.handle,
);

export { adminRoutes };
