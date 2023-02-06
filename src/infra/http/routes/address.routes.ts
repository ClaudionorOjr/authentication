import { Router } from 'express';
import { CreateAddressController } from '../../../modules/account/useCase/create/create-address/create-address-controller';
import { DeleteAddressController } from '../../../modules/account/useCase/delete/delete-address/delete-address-controller';
import { ensureAuthenticateUser } from '../middlewares/ensure-authenticate-user';

const addressRoutes = Router();

const createAddressController = new CreateAddressController();
const deleteAddressController = new DeleteAddressController();

addressRoutes.use(ensureAuthenticateUser);

addressRoutes.post('/', createAddressController.handle);
addressRoutes.delete('/:id/delete', deleteAddressController.handle);

export { addressRoutes };
