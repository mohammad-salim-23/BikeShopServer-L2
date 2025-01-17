import mongoose, { FilterQuery, Query } from "mongoose";

class QueryBuilder<T>{
    public modelQuery:Query<T[],T>;
    public query:Record<string, unknown>;
    constructor(modelQuery:Query<T[], T>,query:Record<string,unknown>){
        this.modelQuery = modelQuery;
        this.query = query;
    }
    search(searchableFields:string[]){
        const searchTerm = this?.query?.searchTerm;
        if(searchTerm){
            this.modelQuery = this.modelQuery.find({
                $or:searchableFields.map((field)=>({
                    [field]:{$regex:searchTerm, $options:'i'},
                })),
            } as FilterQuery<T>)
        }
        return this;
    }
    filter() {
        const queryObj = {...this.query};
        const excludeFields=['searchTerm', 'sort', 'limit', 'page', 'fields'];
        excludeFields.forEach((el)=> delete queryObj[el]);
        const filterField = queryObj.filter as string | undefined;
        if(filterField){
            if (mongoose.Types.ObjectId.isValid(filterField)) {
                this.modelQuery = this.modelQuery.find({
                    "author.authorId": filterField,  
                } as FilterQuery<T>);
            } else {
                throw new Error("Invalid author ID format");
            }
        }
         return this;
    }
    sort(){
        const sortBy = this.query.sortBy as string | undefined;
        const sortOrder = this.query.sortOrder === "desc"?-1:1;
        if(sortBy){
            this.modelQuery = this.modelQuery.sort({
                [sortBy]: sortOrder,
            } as FilterQuery<T>)
        }
        return this;
    }


}
export default QueryBuilder;