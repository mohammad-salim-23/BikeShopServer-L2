import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { orderValidationSchema, updateOrderValidationSchema } from './order.validation';
import { OrderControllers } from './order.controller';
const router = express.Router();

router.post("/", validateRequest(orderValidationSchema), OrderControllers.createOrder);
router.get("/", OrderControllers.getAllOrders);
router.get("/:orderId", OrderControllers.getSingleOrder);
router.patch("/:orderId", validateRequest(updateOrderValidationSchema), OrderControllers.updateOrder);
router.delete("/:order",OrderControllers.deleteOrder);

export const OrderRoutes = router;