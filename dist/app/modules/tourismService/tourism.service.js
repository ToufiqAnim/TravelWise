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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TourismServices = void 0;
const paginationHelper_1 = require("../../../helpers/paginationHelper");
const tourism_constant_1 = require("./tourism.constant");
const tourism_model_1 = require("./tourism.model");
const CreateTourismService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const tourismService = yield tourism_model_1.TourismService.create(payload);
    return tourismService;
});
const GetTourismServices = (paginationOptions, filtersOptions) => __awaiter(void 0, void 0, void 0, function* () {
    // Pagination Options
    const { skip, page, limit, sortBy, sortOrder } = paginationHelper_1.paginationHelpers.calculatePagination(paginationOptions);
    // Sort condition
    const sortCondition = {};
    sortCondition[sortBy] = sortOrder;
    // Filter Options
    const { searchTerm } = filtersOptions, filtersData = __rest(filtersOptions, ["searchTerm"]);
    const andConditions = [];
    if (searchTerm) {
        andConditions.push({
            $or: tourism_constant_1.tourismServiceSearchableFields.map(field => ({
                [field]: { $regex: searchTerm, $options: 'i' },
            })),
        });
    }
    if (Object.keys(filtersData).length) {
        andConditions.push({
            $and: Object.entries(filtersData).map(([field, value]) => ({
                [field]: value,
            })),
        });
    }
    const whereCondition = Object.keys(andConditions).length
        ? { $and: andConditions }
        : {};
    const tourismServices = yield tourism_model_1.TourismService.find(whereCondition)
        .sort(sortCondition)
        .skip(skip)
        .limit(limit);
    const total = yield tourism_model_1.TourismService.find(whereCondition).count();
    const meta = { page, limit, total };
    return { meta, data: tourismServices };
});
const GetTourismService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const tourismService = yield tourism_model_1.TourismService.findById(id);
    return tourismService;
});
const UpdateTourismService = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const tourismService = yield tourism_model_1.TourismService.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    return tourismService;
});
const DeleteTourismService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const tourismService = yield tourism_model_1.TourismService.findByIdAndDelete(id);
    return tourismService;
});
exports.TourismServices = {
    CreateTourismService,
    GetTourismServices,
    GetTourismService,
    UpdateTourismService,
    DeleteTourismService,
};
