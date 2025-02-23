import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AuthServices } from './auth.service';

const registerUser = catchAsync(async (req, res) => {
  const result = await AuthServices.registerUser(req.body);
  //Extract fields
  const filteredData = {
    _id: result._id,
    name: result.name,
    email: result.email,
  };
  sendResponse(res, {
    success: true,
    message: 'user is registered successfully',
    statusCode: 201,
    data: filteredData,
  });
});
const loginUser = catchAsync(async (req, res) => {
  const result = await AuthServices.loginUser(req.body);
  console.log(result);
  const { accessToken } = result;

  sendResponse(res, {
    success: true,
    message: 'login successful',
    statusCode: 200,
    data: {
      accessToken,
    },
  });
});
const getAllUser = catchAsync(async( req , res)=>{
  const result = await AuthServices.getAllUser();
  sendResponse(res , {
    success:true,
    message:"retrieved all data successfully",
    statusCode: 200,
    data: result
  })
});
const updateUserStatusController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { isBlocked } = req.body;
  const result = await AuthServices.updateUserStatus(id, isBlocked);
  sendResponse(res, {
    success: true,
    message: 'User status updated successfully',
    statusCode: 200,
    data: result,
  });
});
const changePassword = catchAsync( async (req , res)=>{
  const {...passwordData} = req.body;

  const result = await AuthServices.changePassword(req.user, passwordData);
  sendResponse(res , {
    statusCode : StatusCodes.OK,
    success : true,
    message: 'Password is updated succesfully!',
    data : result
  })
})
export const AuthControllers = {
  registerUser,
  loginUser,
  getAllUser,
  updateUserStatusController ,
  changePassword 
};
