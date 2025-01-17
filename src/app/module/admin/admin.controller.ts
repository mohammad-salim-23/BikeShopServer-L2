import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AdminServices } from "./admin.service";

export const blockUserController = catchAsync(async (req , res)=>{
    const {userId} = req.params;
    const result = await AdminServices.updateUserIsBlockedIntoDB(userId);
    sendResponse(res , {
        success:true,
        "message": "User blocked successfully",
         "statusCode": 200
    })
})
export const AdminControllers = {
    blockUserController 
}