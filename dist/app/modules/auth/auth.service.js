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
exports.AuthService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const config_1 = __importDefault(require("../../../config"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const jwtHelpers_1 = require("../../../helpers/jwtHelpers");
const user_modal_1 = require("../user/user.modal");
const auth_utils_1 = require("./auth.utils");
const SignUp = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    payload.password = yield auth_utils_1.AuthUtils.hashPassword(payload.password);
    const user = yield user_modal_1.User.create(payload);
    return user;
});
const SignIn = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = payload;
    const userExist = yield user_modal_1.User.findOne({ email }).lean();
    if (!userExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'User account not found');
    }
    // Check Password
    if (!(yield auth_utils_1.AuthUtils.matchedPassword(password, userExist.password))) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'User credentials is wrong');
    }
    const tokenPayload = { _id: userExist._id, role: userExist.role };
    const accessToken = jwtHelpers_1.jwtHelpers.createToken(tokenPayload, config_1.default.jwt.secret, config_1.default.jwt.expires_in);
    return Object.assign(Object.assign({}, userExist), { accessToken });
});
exports.AuthService = { SignUp, SignIn };
