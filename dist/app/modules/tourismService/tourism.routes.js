"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TourismServiceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const tourism_controller_1 = require("./tourism.controller");
const tourism_validation_1 = require("./tourism.validation");
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), (0, validateRequest_1.default)(tourism_validation_1.tourismServiceValidations.createService), tourism_controller_1.TourismServiceController.createTourismService);
router.get('/', 
// auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
tourism_controller_1.TourismServiceController.GetTourismServices);
router.get('/:id', 
// auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
tourism_controller_1.TourismServiceController.GetTourismService);
router.patch('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), (0, validateRequest_1.default)(tourism_validation_1.tourismServiceValidations.updateService), tourism_controller_1.TourismServiceController.UpdateTourismService);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), tourism_controller_1.TourismServiceController.DeleteTourismService);
exports.TourismServiceRoutes = router;
