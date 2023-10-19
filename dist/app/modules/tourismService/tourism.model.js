"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TourismService = void 0;
const mongoose_1 = require("mongoose");
const tourism_interface_1 = require("./tourism.interface");
const tourismServiceSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    city: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    maxGroupSize: { type: Number, required: true },
    image: { type: String, required: true },
    status: { type: String, default: tourism_interface_1.TOURISM_SERVICE_STATUS_ENUM.UNAVAILABLE },
    featured: {
        type: Boolean,
        default: false,
    },
    review: { type: mongoose_1.Types.ObjectId, ref: 'Review' },
}, { timestamps: true });
exports.TourismService = (0, mongoose_1.model)('TourismService', tourismServiceSchema);
