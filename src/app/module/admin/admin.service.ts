import { TUser } from "../user/user.interface";
import { User } from "../user/user.model";

const updateUserIsBlockedIntoDB = async(id:string)=>{
    const updateUser = await User.findByIdAndUpdate(
        id,
        {isBlocked:true},
        {new : true}
    )
    return updateUser;
}
export const AdminServices = {
    updateUserIsBlockedIntoDB ,

}