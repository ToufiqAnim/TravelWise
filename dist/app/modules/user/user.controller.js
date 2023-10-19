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
exports.UserController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const pagination_1 = require("../../../constants/pagination");
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const pick_1 = __importDefault(require("../../../shared/pick"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const user_constant_1 = require("./user.constant");
const user_service_1 = require("./user.service");
const CreateAdmin = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const adminData = req.body;
    const result = yield user_service_1.UserService.CreateAdmin(adminData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Admin created successfully',
        data: result,
    });
}));
const GetUsers = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const paginationOPtions = (0, pick_1.default)(req.query, pagination_1.paginationFields);
    const filtersOPtions = (0, pick_1.default)(req.query, user_constant_1.userSearchAndFilter);
    const result = yield user_service_1.UserService.GetUsers(paginationOPtions, filtersOPtions);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Users data fetched successfully',
        meta: result.meta,
        data: result.data,
    });
}));
const GetSingleUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield user_service_1.UserService.GetSingleUser(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'User data fetched successfully',
        data: result,
    });
}));
const UpdateUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const userData = req.body;
    const result = yield user_service_1.UserService.UpdateUser(id, userData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'User updated successfully',
        data: result,
    });
}));
const DeleteUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield user_service_1.UserService.DeleteUser(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Admin created successfully',
        data: result,
    });
}));
exports.UserController = {
    CreateAdmin,
    GetUsers,
    GetSingleUser,
    UpdateUser,
    DeleteUser,
};
