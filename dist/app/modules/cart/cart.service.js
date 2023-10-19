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
exports.CartService = void 0;
const cart_model_1 = require("./cart.model");
const CreateCartItems = (authUserId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    payload.user = authUserId;
    const cart = yield cart_model_1.Cart.create(payload);
    return cart;
});
const GetCarts = (filtersOptions) => __awaiter(void 0, void 0, void 0, function* () {
    const andConditions = [];
    if (Object.keys(filtersOptions).length) {
        andConditions.push({
            $and: Object.entries(filtersOptions).map(([field, value]) => ({
                [field]: value,
            })),
        });
    }
    const whereCondition = Object.keys(andConditions).length
        ? { $and: andConditions }
        : {};
    const carts = yield cart_model_1.Cart.find(whereCondition).populate('user service');
    return carts;
});
const GetCartItemsByServiceId = (serviceId) => __awaiter(void 0, void 0, void 0, function* () {
    const carts = yield cart_model_1.Cart.find({ service: serviceId }).populate('user service');
    return carts;
});
const DeleteCart = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const cart = yield cart_model_1.Cart.findByIdAndDelete(id);
    return cart;
});
exports.CartService = {
    CreateCartItems,
    GetCartItemsByServiceId,
    GetCarts,
    DeleteCart,
};
