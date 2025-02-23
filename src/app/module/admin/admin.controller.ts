import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BlogServices } from '../Bike/bike.service';
import { AdminServices } from './admin.service';

const blockUserController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await AdminServices.updateUserIsBlockedIntoDB(id);
  sendResponse(res, {
    success: true,
    message: 'User blocked successfully',
    statusCode: 200,
  });
});
const deleteBlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await AdminServices.deleteBlogIntoDB(id);
  sendResponse(res, {
    success: true,
    message: 'Blog deleted successfully',
    statusCode: 200,
  });
});
export const AdminControllers = {
  blockUserController,
  deleteBlog,
};
