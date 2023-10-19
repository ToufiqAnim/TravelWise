import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.routes';
import { BookingRoutes } from '../modules/booking/booking.routes';
import { CartRoutes } from '../modules/cart/cart.routes';
import { CategoryRoutes } from '../modules/categories/categories.routes';
import { FeedbackRoutes } from '../modules/feedback/feedback.routes';
import { ProfileRoutes } from '../modules/profile/profile.routes';
import { ReviewRoutes } from '../modules/review/review.routes';
import { TourismServiceRoutes } from '../modules/tourismService/tourism.routes';
import { UserRoutes } from '../modules/user/user.routes';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/auth',
    routes: AuthRoutes,
  },
  {
    path: '/users',
    routes: UserRoutes,
  },
  {
    path: '/categories',
    routes: CategoryRoutes,
  },
  {
    path: '/tourism-service',
    routes: TourismServiceRoutes,
  },
  {
    path: '/bookings',
    routes: BookingRoutes,
  },
  {
    path: '/reviews',
    routes: ReviewRoutes,
  },
  {
    path: '/profile',
    routes: ProfileRoutes,
  },
  {
    path: '/feedbacks',
    routes: FeedbackRoutes,
  },
  {
    path: '/carts',
    routes: CartRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
