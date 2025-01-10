import { NextFunction, Request, Response } from "express";
import { TUserRole } from "../module/user/user.interface";
import catchAsync from "../utils/catchAsync";
import AppError from "../errors/AppError";
import { StatusCodes } from "http-status-codes";
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from "../config";
import { User } from "../module/user/user.model";
const auth=(...requiredRoles:TUserRole[])=>{
    return catchAsync(async (req:Request, res:Response, next:NextFunction)=>{
        const token = req.headers.authorization;
        if(!token){
            throw new AppError(StatusCodes.UNAUTHORIZED,
                'You are not authorized'
            )
        }
        //checking if the given token is valid
        const decoded = jwt.verify(token, config.jwt_access_secret as string) as JwtPayload;
        const {role, email, iat} = decoded;
        const user = await User.isUserExistsByEmail(email);
        
        if(!user){
            throw new AppError(StatusCodes.NOT_FOUND,'This user is not found!');
        }

        const userStatus = user?.isBlocked;
        if(userStatus){
            throw new AppError(StatusCodes.FORBIDDEN, 'This user is blocked!');
        }
        if(requiredRoles && !requiredRoles.includes(role)){
            throw new AppError(StatusCodes.UNAUTHORIZED,
                'You are not authorized!'
            )
        }
        req.user = decoded as JwtPayload;
        next();
    })
}