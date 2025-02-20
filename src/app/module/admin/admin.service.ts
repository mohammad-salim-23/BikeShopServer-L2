import { Blog } from '../Blog/bike.model';
import { TUser } from '../user/user.interface';
import { User } from '../user/user.model';

const updateUserIsBlockedIntoDB = async (id: string) => {
  const updateUser = await User.findByIdAndUpdate(
    id,
    { isBlocked: true },
    { new: true },
  );
  if (!updateUser) {
    throw new Error('User Not Found!');
  }
  // console.log("update user",updateUser);
  return updateUser;
};
const deleteBlogIntoDB = async (id: string) => {
  const deleteBlog = await Blog.findByIdAndDelete(id);
  return deleteBlog;
};
export const AdminServices = {
  updateUserIsBlockedIntoDB,
  deleteBlogIntoDB,
};
