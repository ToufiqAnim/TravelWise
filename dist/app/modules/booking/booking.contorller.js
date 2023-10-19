"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const pagination_1 = require("../../../constants/pagination");
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const pick_1 = __importDefault(require("../../../shared/pick"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const booking_constant_1 = require("./booking.constant");
const booking_service_1 = require("./booking.service");
const CreateBooking = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const authUserId = (_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a._id;
    const adminData = req.body;
    const result = yield booking_service_1.BookingService.CreateBooking(authUserId, adminData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Admin created successfully',
        data: result,
    });
}));
const GetAllBookings = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const paginationOPtions = (0, pick_1.default)(req.query, pagination_1.paginationFields);
    const filtersOPtions = (0, pick_1.default)(req.query, booking_constant_1.bookingSearchAndFilter);
    const result = yield booking_service_1.BookingService.GetAllBookings(paginationOPtions, filtersOPtions);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'All Bookings data fetched successfully',
        meta: result.meta,
        data: result.data,
    });
}));
const GetBooking = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield booking_service_1.BookingService.GetBooking(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Booking data fetched successfully',
        data: result,
    });
}));
const UpdateBookingStatus = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const status = req.body;
    const result = yield booking_service_1.BookingService.UpdateBookingStatus(id, status);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Booking data fetched successfully',
        data: result,
    });
}));
exports.BookingController = {
    CreateBooking,
    GetAllBookings,
    GetBooking,
    UpdateBookingStatus,
};
