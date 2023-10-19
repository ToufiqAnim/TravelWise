"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Review = void 0;
const mongoose_1 = require("mongoose");
const reviewSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Types.ObjectId, ref: 'User', required: true },
    service: { type: mongoose_1.Types.ObjectId, ref: 'TourismService', required: true },
    rating: { type: Number, required: true },
    review: { type: String, required: true },
}, { timestamps: true });
exports.Review = (0, mongoose_1.model)('Review', reviewSchema);
