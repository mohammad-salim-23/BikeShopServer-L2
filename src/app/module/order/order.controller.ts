import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { OrderServices } from "./order.service";

const createOrder = catchAsync(async (req , res)=>{
    const result = await OrderServices.createOrderintoDB(req.body);
    sendResponse( res , {
        success : true,
        statusCode: StatusCodes.CREATED,
        message : 'Order is created successfully',
        data : result
    })
});
const getAllOrders = catchAsync(async (req , res)=>{
    const result = await OrderServices.getAllOrdersFromDB(req.body);
    sendResponse ( res , {
        success : true,
        message : result.length ? 'Orders retrieved successfully' : 'No orders matched',
        statusCode : StatusCodes.OK,
        data : result
    });
});
const getSingleOrder = catchAsync ( async (req , res)=>{
    const {orderId} = req.params;
    const result = await OrderServices.getSingleOrderFromDB(orderId);

    if(!result){
        return sendResponse( res , {
            success : false,
            message : 'Order not found',
            statusCode : StatusCodes.NOT_FOUND,
            data : null
        })
    };
    sendResponse(res , {
        statusCode : StatusCodes.OK,
        success : true,
        message : 'Order retrieved successfully',
        data : result
    })
});
const getOrderByUser = catchAsync(async(req , res)=>{
    const {userEmail} = req.params;
    console.log("Salim ali");
    const result = await OrderServices.getOrderByUserEmail(userEmail);
    if (!result.length) {
        return sendResponse(res, {
            success: false,
            message: 'No orders found for this user',
            statusCode: StatusCodes.NOT_FOUND,
            data: [],
        });
    }
    sendResponse(res , {
        success : true, 
        message: 'User orders retrieved successfully',
        statusCode: StatusCodes.OK,
        data: result,
    });
});
const updateOrder = catchAsync(async (req , res)=>{
    const {orderId} = req.params;
    const result = await OrderServices.updateOrderIntoDB(orderId , req.body);
    if(!result){
        return sendResponse(res , {
            success : false,
            message : 'Failed to update order',
            statusCode : StatusCodes.NOT_FOUND,
            data: null
        });
    }
    sendResponse(res , {
        success : true,
        message : 'Order updated successfully',
        statusCode : StatusCodes.OK,
        data : result
    });
});
const deleteOrder = catchAsync(async (req , res)=>{
    const {orderId} = req.params;
    const result = await OrderServices.deleteOrderIntoDB(orderId);
   sendResponse (res , {
    success : true,
    message : 'order deleted successfully',
    statusCode : StatusCodes.OK,
   });
});
export const OrderControllers = {
    createOrder , 
    getAllOrders,
    getSingleOrder,
    updateOrder,
    deleteOrder,
    getOrderByUser
}