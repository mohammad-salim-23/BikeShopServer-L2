import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AuthServices } from "./auth.service";

const registerUser = catchAsync(async (req , res)=>{
    const result = await AuthServices.registerUser(req.body);
    //Extract fields
    const filteredData = {
        _id:result._id,
        name:result.name,
        email:result.email
    }
    sendResponse(res,{
        success:true,
        message:"user is registered successfully",
        statusCode:201,
        data:filteredData
    })
})
const loginUser = catchAsync(async (req , res)=>{
    const result = await AuthServices.loginUser(req.body);
    const {accessToken} = result;

    sendResponse(res,{
        success:true,
        message:"login successful",
        statusCode:200,
        data:{
            accessToken
        }
    })
})
export const AuthControllers = {
    registerUser,
    loginUser
}