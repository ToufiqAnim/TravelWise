import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { CartController } from './cart.controller';
import { CartValidations } from './cart.validation';

const router = express.Router();

router.post(
  '/',
  auth(ENUM_USER_ROLE.CUSTOMER),
  validateRequest(CartValidations.createCart),
  CartController.CreateCartItems
);

router.get('/', CartController.GetCarts);

router.get('/service/:id', CartController.GetCartItemsByServiceId);

router.delete('/:id', auth(ENUM_USER_ROLE.CUSTOMER), CartController.DeleteCart);

export const CartRoutes = router;
