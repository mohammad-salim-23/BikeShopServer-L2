import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BlogServices } from "./blog.service";

const createBlog = catchAsync(async (req, res)=>{
   const {blog:blogData} = req.body;

   const result = await BlogServices.createBlogIntoDB(blogData);
   sendResponse( res, {
     statusCode:StatusCodes.OK,
     success:true,
     message:"Blog is created successfully",
     data:result
   })
});
const getSingleBlog = catchAsync(async (req , res)=>{
    const {blogId} = req.params;
    const result = await BlogServices.getSingleBlogFromDB(blogId);
    sendResponse(res,{
        statusCode:StatusCodes.OK,
        success:true,
        message:"Blog is retrieved successfully",
        data:result
    })
})