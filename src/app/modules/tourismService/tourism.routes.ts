import express from 'express';

import validateRequest from '../../middlewares/validateRequest';

import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { TourismServiceController } from './tourism.controller';
import { tourismServiceValidations } from './tourism.validation';

const router = express.Router();

router.post(
  '/',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(tourismServiceValidations.createService),
  TourismServiceController.createTourismService
);

router.get(
  '/',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  TourismServiceController.GetTourismServices
);

router.get(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  TourismServiceController.GetTourismService
);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(tourismServiceValidations.updateService),
  TourismServiceController.UpdateTourismService
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  TourismServiceController.DeleteTourismService
);

export const TourismServiceRoutes = router;
