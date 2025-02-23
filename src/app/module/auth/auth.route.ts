import { Router } from 'express';
import validateRequest from '../../middleware/validateRequest';
import { AuthValidation } from './auth.validation';
import { AuthControllers } from './auth.controller';
import { USER_ROLE } from '../user/user.constant';
import auth from '../../middleware/auth';
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
router.get('/users',
  auth(USER_ROLE.admin),
  AuthControllers.getAllUser
)
router.patch('/users/:id',
  AuthControllers.updateUserStatusController
)
router.post('/change-password',
  auth(USER_ROLE.admin, USER_ROLE.user),
  validateRequest(AuthValidation.changePasswordValidationSchema),
  AuthControllers.changePassword
)
export const authRoutes = router;
