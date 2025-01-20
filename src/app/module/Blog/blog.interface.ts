import { Model, Types } from "mongoose";

export interface TBlog{
    title:string;
    content:string;
    author:string;
    isPublished?:boolean;
}
export interface BlogModel extends Model<TBlog>{
    
}