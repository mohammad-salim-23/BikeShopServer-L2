import QueryBuilder from "../../builder/QueryBuilder";
import { BlogSearchableFields } from "./blog.constant";
import { TBlog } from "./blog.interface";
import { Blog } from "./blog.model";

const createBlogIntoDB = async(payload:TBlog)=>{
    const result = await Blog.create(payload);
    console.log(result);
    return result;
}
const getAllBlogFromDB = async (query: Record<string, unknown>) => {
  const blogQuery = new QueryBuilder(
    Blog.find(),
    query
  )
    .search(BlogSearchableFields)
    .filter()
    .sort();

  const result = await blogQuery.modelQuery
    .select('-createdAt -updatedAt -__v -isPublished') 
    .populate({
      path: 'author', 
      select: 'authorId name email',
    })
    .lean(); 

  return result;
};

const getSingleBlogFromDB = async(id:string)=>{
    const result = await Blog.findById(id);
    return result;
}
const updateBlogIntoDB = async(id:string,
    payload:Partial<TBlog>)=>{
      const {...blogData} = payload;
      const modifiedUpdatedData:Record<string,unknown>={
        ...blogData
      };
      const result = await Blog.findByIdAndUpdate(id,
        modifiedUpdatedData,
        {
            new:true,
            runValidators:true,

        }
      );
      return result;
    }
  const deleteBlogIntoDB = async(blogId:string, authorId:string)=>{
    const blog = await Blog.findById(blogId);
    if(!blog || blog.author.toString()!== authorId){
      return null;
    }
    const result = await Blog.findByIdAndDelete(blogId);
    return result;
  }
export const BlogServices={
    createBlogIntoDB,
    getAllBlogFromDB ,
    getSingleBlogFromDB,
    updateBlogIntoDB,
    deleteBlogIntoDB
}