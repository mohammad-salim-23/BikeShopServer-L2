import { TBlog } from "./blog.interface";
import { Blog } from "./blog.model";

const createBlogIntoDB = async(payload:TBlog)=>{
    const result = await Blog.create(payload);
    console.log(result);
    return result;
}
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
  const deleteBlogIntoDB = async(id:string)=>{
    const result = await Blog.findByIdAndDelete(
      id, 
    );
 return result;
  }
export const BlogServices={
    createBlogIntoDB,
    getSingleBlogFromDB,
    updateBlogIntoDB,
    deleteBlogIntoDB
}