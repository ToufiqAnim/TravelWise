import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ReviewService } from './review.service';

const CreateReview: RequestHandler = catchAsync(async (req, res) => {
  const adminData = req.body;
  const authUserId = req.user?._id;
  const result = await ReviewService.CreateReview(authUserId, adminData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Admin created successfully',
    data: result,
  });
});

const GetAllReviews: RequestHandler = catchAsync(async (req, res) => {
  const result = await ReviewService.GetAllReviews();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Reviews data fetched successfully',
    data: result,
  });
});

const GetReview: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await ReviewService.GetReview(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review data fetched successfully',
    data: result,
  });
});

const UpdateReview: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const reviewData = req.body;
  const result = await ReviewService.UpdateReview(id, reviewData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review updated successfully',
    data: result,
  });
});

const DeleteReview: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await ReviewService.DeleteReview(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Admin created successfully',
    data: result,
  });
});

export const ReviewController = {
  CreateReview,
  GetAllReviews,
  GetReview,
  UpdateReview,
  DeleteReview,
};
