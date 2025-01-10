import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BlogServices } from "./blog.service";

const createBlog = catchAsync(async (req, res)=>{
  

   const result = await BlogServices.createBlogIntoDB(req.body);
  
   sendResponse( res, {
    success:true,
     statusCode:StatusCodes.CREATED,
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
export const BlogControllers = {
  createBlog,
  getSingleBlog
}