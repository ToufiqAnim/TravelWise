import { ObjectId } from 'mongoose';
import { IReview } from './review.interface';
import { Review } from './review.model';

const CreateReview = async (authUserId: ObjectId, payload: IReview) => {
  payload.user = authUserId;
  const review = await Review.create(payload);
  return review;
};

const GetAllReviews = async () => {
  const reviews = await Review.find();

  return reviews;
};

const GetReview = async (id: string) => {
  const review = await Review.findById(id);
  return review;
};

const UpdateReview = async (id: string, payload: Partial<IReview>) => {
  const review = await Review.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return review;
};

const DeleteReview = async (id: string) => {
  const review = await Review.findByIdAndDelete(id);
  return review;
};

export const ReviewService = {
  CreateReview,
  GetAllReviews,
  GetReview,
  UpdateReview,
  DeleteReview,
};
