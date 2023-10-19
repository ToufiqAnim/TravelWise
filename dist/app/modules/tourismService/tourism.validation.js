"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tourismServiceValidations = void 0;
const zod_1 = require("zod");
const tourism_interface_1 = require("./tourism.interface");
const createService = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({ required_error: 'Title is required' }),
        price: zod_1.z.number({ required_error: 'Price is required' }),
        description: zod_1.z.string({ required_error: 'Description is required' }),
        status: zod_1.z
            .enum(Object.values(tourism_interface_1.TOURISM_SERVICE_STATUS_ENUM))
            .optional(),
        review: zod_1.z.string().optional(),
    }),
});
const updateService = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        price: zod_1.z.number().optional(),
        description: zod_1.z.string().optional(),
        status: zod_1.z
            .enum(Object.values(tourism_interface_1.TOURISM_SERVICE_STATUS_ENUM))
            .optional(),
        review: zod_1.z.string().optional(),
    }),
});
exports.tourismServiceValidations = { createService, updateService };
