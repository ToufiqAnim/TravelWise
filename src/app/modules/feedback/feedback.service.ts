import { ObjectId } from 'mongoose';
import { IFeedback } from './feedback.interface';
import { Feedback } from './feedback.modal';

const CreateFeedback = async (authUserId: ObjectId, payload: IFeedback) => {
  payload.user = authUserId;
  const feedback = await Feedback.create(payload);
  return feedback;
};

const GetAllFeedbacks = async () => {
  const feedbacks = await Feedback.find();

  return feedbacks;
};

export const FeedbackService = {
  CreateFeedback,
  GetAllFeedbacks,
};
