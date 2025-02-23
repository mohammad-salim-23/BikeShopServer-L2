import { Router } from 'express';
import { AdminRoutes } from '../module/admin/admin.route';
import { BikeRoutes } from '../module/Bike/bike.route';
import { authRoutes } from '../module/auth/auth.route';

const router = Router();
const moduleRoutes = [
  {
    path: '/bike',
    route: BikeRoutes,
  },
  {
    path: '/auth',
    route: authRoutes,
  },
 
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
