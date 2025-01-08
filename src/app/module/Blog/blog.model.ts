import { model, Schema } from "mongoose";
import { TBlog } from "./blog.interface";

const blogSchema = new Schema<TBlog>(
    {
        title:{
            type:String,
            required:true
        },
        content:{
            type:String,
            required:true
        },
        author:{
            type:Schema.Types.ObjectId,
            required:[true,"Author is required"],
            ref:"User"
        },
        isPublished:{
            type:Boolean,
            default:false
        }
    },
    {
        timestamps:true
    }
);
export const Model = model<TBlog>("Blog",blogSchema);