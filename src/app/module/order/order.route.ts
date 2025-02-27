import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { orderValidationSchema, updateOrderValidationSchema } from './order.validation';
import { OrderControllers } from './order.controller';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../user/user.constant';
const router = express.Router();

router.post("/", validateRequest(orderValidationSchema), OrderControllers.createOrder);
router.get("/", OrderControllers.getAllOrders);
router.get("/user/:userEmail", auth(USER_ROLE.user) || auth(USER_ROLE.admin),
     OrderControllers.getOrderByUser);
router.get("/:orderId", OrderControllers.getSingleOrder);

router.patch("/:orderId", validateRequest(updateOrderValidationSchema), OrderControllers.updateOrder);
router.delete("/:order",OrderControllers.deleteOrder);

export const OrderRoutes = router;