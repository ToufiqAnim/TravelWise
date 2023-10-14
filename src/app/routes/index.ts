import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.routes';
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
    path: '/tourism-service',
    routes: TourismServiceRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
