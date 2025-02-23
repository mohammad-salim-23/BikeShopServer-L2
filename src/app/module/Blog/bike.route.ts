import { Router } from 'express';
import validateRequest from '../../middleware/validateRequest';
import {
  createBikeValidationSchema,
  updateBikeValidationSchema,
  
} from './bike.validation';

import auth from '../../middleware/auth';
import { USER_ROLE } from '../user/user.constant';
import { BikeControllers } from './bike.controller';
const router = Router();

router.post(
  '/',
  // auth(USER_ROLE.admin),
  validateRequest(createBikeValidationSchema),
  BikeControllers.createBike,
);
router.get('/', BikeControllers.getAllBikes);
router.get('/:bikeId', BikeControllers.getSingleBike);
router.patch(
  '/:bikeId',
  // auth(USER_ROLE.admin),
  validateRequest(updateBikeValidationSchema),
  BikeControllers.updateBike,
);
router.delete('/:bikeId', 
  // auth(USER_ROLE.admin),
  BikeControllers.deleteBike);

export const BikeRoutes = router;
