import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { ProfileController } from './profile.controller';
import { ProfileValidations } from './profile.validation';

const router = express.Router();

router.get(
  '/my-profile',
  auth(
    ENUM_USER_ROLE.SUPER_ADMIN,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.CUSTOMER
  ),
  ProfileController.GetProfile
);

router.patch(
  '/update',
  auth(
    ENUM_USER_ROLE.SUPER_ADMIN,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.CUSTOMER
  ),
  validateRequest(ProfileValidations.updateProfile),
  ProfileController.UpdateProfile
);

export const ProfileRoutes = router;
