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
exports.TourismServiceController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const pagination_1 = require("../../../constants/pagination");
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const pick_1 = __importDefault(require("../../../shared/pick"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const tourism_constant_1 = require("./tourism.constant");
const tourism_service_1 = require("./tourism.service");
const createTourismService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const TourismServiceData = req.body;
    const result = yield tourism_service_1.TourismServices.CreateTourismService(TourismServiceData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Tourism Service created successfully',
        data: result,
    });
}));
const GetTourismServices = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const paginationOPtions = (0, pick_1.default)(req.query, pagination_1.paginationFields);
    const filtersOPtions = (0, pick_1.default)(req.query, tourism_constant_1.tourismServiceSearchAndFilter);
    const result = yield tourism_service_1.TourismServices.GetTourismServices(paginationOPtions, filtersOPtions);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'TourismServices data fetched successfully',
        meta: result.meta,
        data: result.data,
    });
}));
const GetTourismService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield tourism_service_1.TourismServices.GetTourismService(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'TourismService data fetched successfully',
        data: result,
    });
}));
const UpdateTourismService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const TourismServiceData = req.body;
    const result = yield tourism_service_1.TourismServices.UpdateTourismService(id, TourismServiceData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'TourismService updated successfully',
        data: result,
    });
}));
const DeleteTourismService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield tourism_service_1.TourismServices.DeleteTourismService(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'TourismService created successfully',
        data: result,
    });
}));
exports.TourismServiceController = {
    createTourismService,
    GetTourismService,
    GetTourismServices,
    UpdateTourismService,
    DeleteTourismService,
};
