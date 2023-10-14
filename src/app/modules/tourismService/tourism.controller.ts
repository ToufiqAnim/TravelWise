import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { tourismServiceSearchAndFilter } from './tourism.constant';
import { TourismServices } from './tourism.service';

const createTourismService: RequestHandler = catchAsync(async (req, res) => {
  const TourismServiceData = req.body;
  const result = await TourismServices.CreateTourismService(TourismServiceData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Tourism Service created successfully',
    data: result,
  });
});

const GetTourismServices: RequestHandler = catchAsync(async (req, res) => {
  const paginationOPtions = pick(req.query, paginationFields);
  const filtersOPtions = pick(req.query, tourismServiceSearchAndFilter);
  const result = await TourismServices.GetTourismServices(
    paginationOPtions,
    filtersOPtions
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'TourismServices data fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});

const GetTourismService: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await TourismServices.GetTourismService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'TourismService data fetched successfully',
    data: result,
  });
});

const UpdateTourismService: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const TourismServiceData = req.body;
  const result = await TourismServices.UpdateTourismService(
    id,
    TourismServiceData
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'TourismService updated successfully',
    data: result,
  });
});

const DeleteTourismService: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await TourismServices.DeleteTourismService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'TourismService created successfully',
    data: result,
  });
});

export const TourismServiceController = {
  createTourismService,
  GetTourismService,
  GetTourismServices,
  UpdateTourismService,
  DeleteTourismService,
};
