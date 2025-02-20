import { Router } from 'express';
import validateRequest from '../../middleware/validateRequest';
import {
  createBlogValidationSchema,
  updateBlogValidationSchema,
} from './bike.validation';
import { BlogControllers } from './bike.controller';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../user/user.constant';
const router = Router();

router.post(
  '/',
  auth(USER_ROLE.user),
  validateRequest(createBlogValidationSchema),
  BlogControllers.createBlog,
);
router.get('/', BlogControllers.getAllBlog);
router.patch(
  '/:id',
  auth(USER_ROLE.user),
  validateRequest(updateBlogValidationSchema),
  BlogControllers.updateBlog,
);
router.delete('/:id', auth(USER_ROLE.user), BlogControllers.deleteBlog);

export const BlogRoutes = router;
