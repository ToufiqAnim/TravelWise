import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { FeedbackService } from './feedback.service';

const CreateFeedback: RequestHandler = catchAsync(async (req, res) => {
  const adminData = req.body;
  const authUserId = req.user?._id;
  const result = await FeedbackService.CreateFeedback(authUserId, adminData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Feedback created successfully',
    data: result,
  });
});

const GetAllFeedbacks: RequestHandler = catchAsync(async (req, res) => {
  const result = await FeedbackService.GetAllFeedbacks();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Feedbacks data fetched successfully',
    data: result,
  });
});

export const FeedbackController = {
  CreateFeedback,
  GetAllFeedbacks,
};
