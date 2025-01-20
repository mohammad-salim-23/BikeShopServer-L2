import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BlogServices } from "./blog.service";

const createBlog = catchAsync(async (req, res)=>{
  

 const {id:authorId , name, email} = req.user;
 //Combine request body with the author ID
 const blogPayload={
  ...req.body,
  author:authorId
 }
   const result = await BlogServices.createBlogIntoDB(blogPayload);
  
   sendResponse( res, {
    success:true,
     statusCode:StatusCodes.CREATED,
     message:"Blog is created successfully",
     data:{
      _id:result._id,
      title:result.title,
      content:result.content,
      author:{
        authorId:authorId,
        name:name,
        email:email
       
      }
     }
   })
});
const getAllBlog = catchAsync(async (req, res) => {
  const result = await BlogServices.getAllBlogFromDB(req.query);

  sendResponse(res, {
    success: true,
    message: result.length
      ? "Blogs fetched successfully"
      : "No blogs matched the query. Returning all data.",
    statusCode: 200,
    data: result,
  });
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
});

const updateBlog = catchAsync(async (req, res) => {
  const { id: blogId } = req.params; 
  const { id: authorId } = req.user; 
  const blogPayload = {
    ...req.body,
    author: authorId,
  };

  const existingBlog = await BlogServices.getSingleBlogFromDB(blogId);
  if (!existingBlog) {
    return sendResponse(res, {
      success: false,
      message: "Failed to update blog: Blog not found.",
      statusCode: 404,
      data: null,
    });
  }

  if (existingBlog.author.toString() !== authorId) {
    return sendResponse(res, {
      success: false,
      message: "Unauthorized: You can only update your own blog.",
      statusCode: 403,
      data: null,
    });
  }

  // Update the blog
  const result = await BlogServices.updateBlogIntoDB(blogId, blogPayload);

  if (!result) {
    return sendResponse(res, {
      success: false,
      message: "Failed to update blog: Blog not found.",
      statusCode: 404,
      data: null,
    });
  }

  sendResponse(res, {
    success: true,
    message: "Blog updated successfully",
    statusCode: 200,
    data: {
      _id: result._id,
      title: result.title,
      content: result.content,
      author: {
        id: authorId,
        name: req.user.name,
        email: req.user.email,
      },
    },
  });
});
 const deleteBlog = catchAsync(async(req , res)=>{
  const {id:blogId} = req.params;
  const {id:authorId} = req.user;
  const result = await BlogServices.deleteBlogIntoDB(blogId, authorId);
  if(!result){
    return sendResponse(res , {
      success:false,
      message:"Failed to delete blog:Blog not found or unauthorized",
      statusCode:404
    })
  }
  sendResponse(res, {
    success:true,
    message:"Blog deleted successfully",
    statusCode:200,
    
  })
 })
export const BlogControllers = {
  createBlog,
  getAllBlog ,
  getSingleBlog,
  updateBlog,
  deleteBlog
}