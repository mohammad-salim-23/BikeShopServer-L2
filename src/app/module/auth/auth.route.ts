import { Router } from 'express';
import validateRequest from '../../middleware/validateRequest';
import { AuthValidation } from './auth.validation';
import { AuthControllers } from './auth.controller';
const router = Router();

router.post(
  '/login',
  validateRequest(AuthValidation.loginValidationSchema),
  AuthControllers.loginUser,
);
router.post(
  '/register',
  validateRequest(AuthValidation.registerValidationSchema),
  AuthControllers.registerUser,
);
export const authRoutes = router;
