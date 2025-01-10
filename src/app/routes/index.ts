import { Router } from "express";
import { BlogRoutes } from "../module/Blog/blog.route";
import { authRoutes } from "../module/auth/auth.route";

const router = Router();
const moduleRoutes=[
    {
        path:'/blogs',
        route:BlogRoutes
    },
    {
        path:'/auth',
        route:authRoutes
    }
]
moduleRoutes.forEach((route)=>router.use(route.path,route.route));
export default router;