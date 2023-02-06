import { Router } from 'express';
import { addressRoutes } from './address.routes';
import { adminRoutes } from './admin.routes';
import { userRoutes } from './user.routes';

const router = Router();

//! Testar rotas
router.use('/admin', adminRoutes);
router.use('/user', userRoutes);
router.use('/user/address', addressRoutes);

export { router };
