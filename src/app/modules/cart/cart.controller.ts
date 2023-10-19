import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { cartFilterableFields } from './cart.constant';
import { CartService } from './cart.service';

const CreateCartItems: RequestHandler = catchAsync(async (req, res) => {
  const adminData = req.body;
  const authUserId = req.user?._id;
  const result = await CartService.CreateCartItems(authUserId, adminData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cart Items created successfully',
    data: result,
  });
});

const GetCarts: RequestHandler = catchAsync(async (req, res) => {
  const filtersOPtions = pick(req.query, cartFilterableFields);
  const result = await CartService.GetCarts(filtersOPtions);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Carts data fetched successfully',
    data: result,
  });
});

const GetCartItemsByServiceId: RequestHandler = catchAsync(async (req, res) => {
  const serviceId = req.params.id;
  const result = await CartService.GetCartItemsByServiceId(serviceId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Carts data fetched successfully',
    data: result,
  });
});

const DeleteCart: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await CartService.DeleteCart(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Admin created successfully',
    data: result,
  });
});

export const CartController = {
  CreateCartItems,
  GetCartItemsByServiceId,
  GetCarts,
  DeleteCart,
};
