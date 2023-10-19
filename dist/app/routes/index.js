"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_routes_1 = require("../modules/auth/auth.routes");
const booking_routes_1 = require("../modules/booking/booking.routes");
const cart_routes_1 = require("../modules/cart/cart.routes");
const categories_routes_1 = require("../modules/categories/categories.routes");
const feedback_routes_1 = require("../modules/feedback/feedback.routes");
const profile_routes_1 = require("../modules/profile/profile.routes");
const review_routes_1 = require("../modules/review/review.routes");
const tourism_routes_1 = require("../modules/tourismService/tourism.routes");
const user_routes_1 = require("../modules/user/user.routes");
const router = express_1.default.Router();
const moduleRoutes = [
    // ... routes
    {
        path: '/auth',
        routes: auth_routes_1.AuthRoutes,
    },
    {
        path: '/users',
        routes: user_routes_1.UserRoutes,
    },
    {
        path: '/categories',
        routes: categories_routes_1.CategoryRoutes,
    },
    {
        path: '/tourism-service',
        routes: tourism_routes_1.TourismServiceRoutes,
    },
    {
        path: '/bookings',
        routes: booking_routes_1.BookingRoutes,
    },
    {
        path: '/reviews',
        routes: review_routes_1.ReviewRoutes,
    },
    {
        path: '/profile',
        routes: profile_routes_1.ProfileRoutes,
    },
    {
        path: '/feedbacks',
        routes: feedback_routes_1.FeedbackRoutes,
    },
    {
        path: '/carts',
        routes: cart_routes_1.CartRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.routes));
exports.default = router;
