import { Router } from 'express';
import validateRequest from '../../middleware/validateRequest';
import {
  createBikeValidationSchema,
  updateBikeValidationSchema,
  
} from './bike.validation';
import { BlogControllers } from './bike.controller';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../user/user.constant';
const router = Router();

router.post(
  '/',
  // auth(USER_ROLE.admin),
  validateRequest(createBikeValidationSchema),
  BlogControllers.createBike,
);
router.get('/', BlogControllers.getAllBikes);
router.patch(
  '/:id',
  // auth(USER_ROLE.admin),
  validateRequest(updateBikeValidationSchema),
  BlogControllers.updateBike,
);
router.delete('/:id', 
  // auth(USER_ROLE.admin),
 BlogControllers.deleteBike);

export const BlogRoutes = router;
