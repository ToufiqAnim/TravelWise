import httpStatus from 'http-status';
import { ObjectId, SortOrder } from 'mongoose';
import ApiError from '../../../errors/ApiError';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { bookingSearchableFields } from './booking.constant';
import { IBooking, IBookingSearch, IBookingStatus } from './booking.interface';
import { Booking } from './booking.model';

const CreateBooking = async (authUserId: ObjectId, payload: IBooking) => {
  payload.orderBy = authUserId;
  const booking = await Booking.create(payload);
  return booking;
};
const GetAllBookings = async (
  paginationOptions: IPaginationOptions,
  filtersOptions: IBookingSearch
) => {
  // Pagination Options
  const { skip, page, limit, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  // Sort condition
  const sortCondition: { [key: string]: SortOrder } = {};
  sortCondition[sortBy] = sortOrder;

  // Filter Options
  const { searchTerm } = filtersOptions;

  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      $or: bookingSearchableFields.map(field => ({
        [field]: { $regex: searchTerm, $options: 'i' },
      })),
    });
  }

  const whereCondition = Object.keys(andConditions).length
    ? { $and: andConditions }
    : {};

  const bookings = await Booking.find(whereCondition)
    .sort(sortCondition)
    .skip(skip)
    .limit(limit);

  const total = await Booking.find(whereCondition).count();

  const meta = { page, limit, total };

  return { meta, data: bookings };
};
const GetBooking = async (id: string) => {
  const booking = await Booking.findById(id);
  return booking;
};
const UpdateBookingStatus = async (id: string, payload: IBookingStatus) => {
  const bookingExist = await Booking.findById(id);
  if (!bookingExist)
    throw new ApiError(httpStatus.NOT_FOUND, 'Booking data not found');

  const booking = await Booking.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return booking;
};
export const BookingService = {
  CreateBooking,
  GetAllBookings,
  GetBooking,
  UpdateBookingStatus,
};
