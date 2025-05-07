import { StatusCodes } from "http-status-codes";


import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { createNewsletter, getAllSubscribers } from "./newsletter.service";
import sendResponse from "../../utils/sendResponse";

export const subscribeNewsletter = async (req: Request, res: Response)=>{
    const result = await createNewsletter(req.body);
    sendResponse(res , {
        statusCode: StatusCodes.OK,
        success: true,
        message: "Newsletter subscription successful",
        data: result,

    })
};
export const  getSubscriber= catchAsync( async(req: Request , res: Response)=>{
    const result = await getAllSubscribers();
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: "Newsletter subscription successful",
        data: result,
    })
})