import { Router } from 'express';
import { BlogRoutes } from '../module/Blog/blog.route';
import { authRoutes } from '../module/auth/auth.route';
import { AdminRoutes } from '../module/admin/admin.route';

const router = Router();
const moduleRoutes = [
  {
    path: '/blogs',
    route: BlogRoutes,
  },
  {
    path: '/auth',
    route: authRoutes,
  },
  {
    path: '/admin',
    route: AdminRoutes,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
