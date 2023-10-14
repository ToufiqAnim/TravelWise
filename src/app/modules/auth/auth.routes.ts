import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AuthController } from './auth.controller';
import { AuthValidations } from './auth.validation';
const router = express.Router();

router.post(
  '/signup',
  validateRequest(AuthValidations.signUp),
  AuthController.SignUp
);

router.post(
  '/signin',
  validateRequest(AuthValidations.signIn),
  AuthController.SignIn
);
export const AuthRoutes = router;
