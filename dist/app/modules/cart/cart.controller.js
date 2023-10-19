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
exports.CartController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const pick_1 = __importDefault(require("../../../shared/pick"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const cart_constant_1 = require("./cart.constant");
const cart_service_1 = require("./cart.service");
const CreateCartItems = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const adminData = req.body;
    const authUserId = (_a = req.user) === null || _a === void 0 ? void 0 : _a._id;
    const result = yield cart_service_1.CartService.CreateCartItems(authUserId, adminData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Cart Items created successfully',
        data: result,
    });
}));
const GetCarts = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filtersOPtions = (0, pick_1.default)(req.query, cart_constant_1.cartFilterableFields);
    const result = yield cart_service_1.CartService.GetCarts(filtersOPtions);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Carts data fetched successfully',
        data: result,
    });
}));
const GetCartItemsByServiceId = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const serviceId = req.params.id;
    const result = yield cart_service_1.CartService.GetCartItemsByServiceId(serviceId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Carts data fetched successfully',
        data: result,
    });
}));
const DeleteCart = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield cart_service_1.CartService.DeleteCart(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Admin created successfully',
        data: result,
    });
}));
exports.CartController = {
    CreateCartItems,
    GetCartItemsByServiceId,
    GetCarts,
    DeleteCart,
};
