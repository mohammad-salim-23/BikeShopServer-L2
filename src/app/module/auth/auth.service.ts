import { StatusCodes } from 'http-status-codes';
import AppError from '../../errors/AppError';
import { User } from '../user/user.model';
import { TLoginUser, TRegisterUser } from './auth.interface';
import { createToken } from './auth.utils';
import config from '../../config';
import bcrypt from 'bcrypt';
import { JwtPayload } from 'jsonwebtoken';
const registerUser = async (payload: TRegisterUser) => {
  //hash the password before saving
  payload.password = await bcrypt.hash(payload.password, 10);
  const result = await User.create(payload);
  return result;
};
const loginUser = async (payload: TLoginUser) => {
  //checking if the user is exist
  const user = await User.isUserExistsByEmail(payload.email);
  if (!user) {
    throw new AppError(StatusCodes.NOT_FOUND, 'This user is not found!');
  }
  //checking if the user is blocked
  const userStatus = user?.isBlocked;
  if (userStatus) {
    throw new AppError(StatusCodes.FORBIDDEN, 'This user is blocked!');
  }
  // checking if the password is correct
  if (!(await User.isPasswordMatched(payload?.password, user?.password))) {
    throw new AppError(StatusCodes.FORBIDDEN, 'password is not matched!');
  }
  const jwtPayload = {
    userId: user.email,
    role: user.role,
  };
  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );
  return { accessToken };
};
const getAllUser = async (
  
)=> {
  const users = await User.find({}, { password: 0 }); 
  if (!users.length) {
    throw new AppError(StatusCodes.NOT_FOUND, 'No users found!');
  }
  return users;
};
const updateUserStatus = async (userId: string, isBlocked: boolean) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new AppError(StatusCodes.NOT_FOUND, 'User not found!');
  }
  user.isBlocked = isBlocked;
  await user.save();
  return user;
};
const changePassword = async (
  userData: JwtPayload,
  payload: { oldPassword: string; newPassword: string },
) => {
  // checking if the user is exist
  const user = await User.isUserExistsByEmail(userData.userId);

  if (!user) {
    throw new AppError(StatusCodes.NOT_FOUND, 'This user is not found !');
  }

  //checking if the password is correct

  if (!(await User.isPasswordMatched(payload.oldPassword, user?.password)))
    throw new AppError(StatusCodes.FORBIDDEN, 'Password do not matched');

  //hash new password
  const newHashedPassword = await bcrypt.hash(
    payload.newPassword,
    Number(config.bcrypt_salt_round),
  );

  await User.findOneAndUpdate(
    {
      id: userData.userId,
      role: userData.role,
    },
    {
      password: newHashedPassword,
      
      passwordChangedAt: new Date(),
    },
  );

  return null;
};


export const AuthServices = {
  loginUser,
  registerUser,
  getAllUser,
  updateUserStatus,
  changePassword
};
