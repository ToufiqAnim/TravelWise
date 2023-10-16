import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { FeedbackController } from './feedback.controller';
import { FeedbackValidations } from './feedback.validation';

const router = express.Router();

router.post(
  '/',
  auth(ENUM_USER_ROLE.CUSTOMER),
  validateRequest(FeedbackValidations.createFeedback),
  FeedbackController.CreateFeedback
);

router.get('/', FeedbackController.GetAllFeedbacks);

export const FeedbackRoutes = router;
