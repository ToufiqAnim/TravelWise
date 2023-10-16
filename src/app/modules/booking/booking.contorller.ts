import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import { ObjectId } from 'mongoose';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { bookingSearchAndFilter } from './booking.constant';
import { BookingService } from './booking.service';

const CreateBooking: RequestHandler = catchAsync(async (req, res) => {
  const authUserId = req?.user?._id as ObjectId;
  const adminData = req.body;
  const result = await BookingService.CreateBooking(authUserId, adminData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Admin created successfully',
    data: result,
  });
});

const GetAllBookings: RequestHandler = catchAsync(async (req, res) => {
  const paginationOPtions = pick(req.query, paginationFields);
  const filtersOPtions = pick(req.query, bookingSearchAndFilter);
  const result = await BookingService.GetAllBookings(
    paginationOPtions,
    filtersOPtions
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Bookings data fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});
const GetBooking: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await BookingService.GetBooking(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking data fetched successfully',
    data: result,
  });
});
const UpdateBookingStatus: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const status = req.body;
  const result = await BookingService.UpdateBookingStatus(id, status);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking data fetched successfully',
    data: result,
  });
});
export const BookingController = {
  CreateBooking,
  GetAllBookings,
  GetBooking,
  UpdateBookingStatus,
};
