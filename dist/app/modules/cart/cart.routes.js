"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const cart_controller_1 = require("./cart.controller");
const cart_validation_1 = require("./cart.validation");
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.CUSTOMER), (0, validateRequest_1.default)(cart_validation_1.CartValidations.createCart), cart_controller_1.CartController.CreateCartItems);
router.get('/', cart_controller_1.CartController.GetCarts);
router.get('/service/:id', cart_controller_1.CartController.GetCartItemsByServiceId);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.CUSTOMER), cart_controller_1.CartController.DeleteCart);
exports.CartRoutes = router;
