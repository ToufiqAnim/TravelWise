"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const booking_contorller_1 = require("./booking.contorller");
const booking_validation_1 = require("./booking.validation");
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.CUSTOMER), (0, validateRequest_1.default)(booking_validation_1.BookingValidations.createBooking), booking_contorller_1.BookingController.CreateBooking);
router.get('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.CUSTOMER), booking_contorller_1.BookingController.GetAllBookings);
router.get('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), booking_contorller_1.BookingController.GetBooking);
router.patch('/update-status/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), (0, validateRequest_1.default)(booking_validation_1.BookingValidations.updateBookingStatus), booking_contorller_1.BookingController.UpdateBookingStatus);
exports.BookingRoutes = router;
