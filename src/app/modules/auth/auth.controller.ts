import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { AuthService } from './auth.service';

const SignUp: RequestHandler = catchAsync(async (req, res) => {
  const result = await AuthService.SignUp(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Signed Up successfully',
    data: result,
  });
});
const SignIn: RequestHandler = catchAsync(async (req, res) => {
  const result = await AuthService.SignIn(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Signed Up successfully',
    data: result,
  });
});
export const AuthController = { SignUp, SignIn };
