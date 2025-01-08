import { Model } from "mongoose";
import { USER_ROLE } from "./user.constant";

export interface TUser{
    name: string; 
  email: string; 
  password: string; 
  role: "admin" | "user"; 
  isBlocked: boolean;
}
export interface UserModel extends Model<TUser>{
   //instance methods for checking if the user exists
   isUserExistsByEmail(email:string):Promise<boolean>;
   //instance methods for checking if passwords are matched
   isPasswordMatched(
    plainTextPassword:string,
    hashedPassword:string
   ):Promise<boolean>;
}
export type TUserRole = keyof typeof USER_ROLE;