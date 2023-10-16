import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { ReviewController } from './review.controller';
import { ReviewValidations } from './review.validation';

const router = express.Router();

router.post(
  '/',
  auth(ENUM_USER_ROLE.CUSTOMER),
  validateRequest(ReviewValidations.createReview),
  ReviewController.CreateReview
);

router.get('/', ReviewController.GetAllReviews);

router.get('/:id', auth(ENUM_USER_ROLE.CUSTOMER), ReviewController.GetReview);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.CUSTOMER),
  validateRequest(ReviewValidations.updateReview),
  ReviewController.UpdateReview
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.CUSTOMER),
  ReviewController.DeleteReview
);

export const ReviewRoutes = router;
