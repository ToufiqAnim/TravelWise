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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewService = void 0;
const review_model_1 = require("./review.model");
const CreateReview = (authUserId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    payload.user = authUserId;
    const review = yield review_model_1.Review.create(payload);
    return review;
});
const GetAllReviews = () => __awaiter(void 0, void 0, void 0, function* () {
    const reviews = yield review_model_1.Review.find().populate('user');
    return reviews;
});
const GetReviewsByServiceId = (serviceId) => __awaiter(void 0, void 0, void 0, function* () {
    const reviews = yield review_model_1.Review.find({ service: serviceId }).populate('user');
    return reviews;
});
const GetReview = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const review = yield review_model_1.Review.findById(id).populate('user');
    return review;
});
const UpdateReview = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const review = yield review_model_1.Review.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    return review;
});
const DeleteReview = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const review = yield review_model_1.Review.findByIdAndDelete(id);
    return review;
});
exports.ReviewService = {
    CreateReview,
    GetAllReviews,
    GetReviewsByServiceId,
    GetReview,
    UpdateReview,
    DeleteReview,
};
