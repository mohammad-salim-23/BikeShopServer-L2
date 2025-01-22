import { Router } from 'express';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../user/user.constant';
import { AdminControllers } from './admin.controller';
const router = Router();

router.patch(
  '/:id/block',
  auth(USER_ROLE.admin),
  AdminControllers.blockUserController,
);
router.delete('/blogs/:id', auth(USER_ROLE.admin), AdminControllers.deleteBlog);

export const AdminRoutes = router;
